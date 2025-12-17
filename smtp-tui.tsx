import React, { useState, useEffect } from 'react';
import { render, Box, Text, useInput, useApp } from 'ink';
import { createServer } from 'net';
import { simpleParser } from 'mailparser';

interface Email {
  from: string;
  to: string;
  subject: string;
  body: string;
  time: string;
  html?: string;
  headers?: string;
}

function App() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selected, setSelected] = useState(0);
  const [viewMode, setViewMode] = useState<'normal' | 'headers'>('normal');
  const { exit } = useApp();

  useInput((input, key) => {
    if (input === 'q') exit();
    if (key.downArrow || input === 'j') setSelected(s => Math.min(s + 1, emails.length - 1));
    if (key.upArrow || input === 'k') setSelected(s => Math.max(s - 1, 0));

    // Delete email
    if (input === 'd' && emails.length > 0) {
      setEmails(prev => prev.filter((_, i) => i !== selected));
      setSelected(s => Math.max(0, Math.min(s, emails.length - 2)));
    }

    // Open HTML in browser
    if (input === 'o' && emails[selected]?.html) {
      const tmpFile = `/tmp/email-${Date.now()}.html`;
      Bun.write(tmpFile, emails[selected].html!);
      Bun.spawn(['xdg-open', tmpFile], { stdout: 'ignore', stderr: 'ignore' });
    }

    // Toggle raw headers view
    if (input === 'r') {
      setViewMode(v => v === 'normal' ? 'headers' : 'normal');
    }
  });

  useEffect(() => {
    const server = createServer((conn) => {
      conn.write('220 smtp-tui\r\n');
      let from = '', recipients: string[] = [], inData = false, raw = '';

      conn.on('data', async (chunk) => {
        const str = chunk.toString();

        if (inData) {
          raw += str;
          if (raw.includes('\r\n.\r\n')) {
            const content = raw.split('\r\n.\r\n')[0];
            try {
              const parsed = await simpleParser(content);
              const headersMap = parsed.headers as any;
              const headerLines: string[] = [];
              if (headersMap) {
                for (const [key, value] of headersMap) {
                  const valueStr = typeof value === 'object' && value !== null
                    ? (value.text || value.value || JSON.stringify(value))
                    : String(value);
                  headerLines.push(`${key}: ${valueStr}`);
                }
              }
              setEmails(prev => [{
                from: parsed.from?.text || from,
                to: parsed.to?.text || recipients.join(', '),
                subject: parsed.subject || '(no subject)',
                body: parsed.text || parsed.html?.replace(/<[^>]*>/g, '') || '',
                time: new Date().toLocaleTimeString(),
                html: parsed.html || undefined,
                headers: headerLines.join('\n'),
              }, ...prev]);
            } catch {}
            conn.write('250 OK\r\n');
            inData = false; raw = '';
          }
          return;
        }

        const line = str.trim().toUpperCase();
        if (line.startsWith('HELO') || line.startsWith('EHLO')) conn.write('250 OK\r\n');
        else if (line.startsWith('MAIL FROM:')) { from = str.split(':')[1]?.trim() || ''; conn.write('250 OK\r\n'); }
        else if (line.startsWith('RCPT TO:')) { recipients.push(str.split(':')[1]?.trim() || ''); conn.write('250 OK\r\n'); }
        else if (line === 'DATA') { inData = true; conn.write('354 Send data\r\n'); }
        else if (line === 'QUIT') { conn.write('221 Bye\r\n'); conn.end(); }
        else if (line === 'RSET' || line === 'NOOP') conn.write('250 OK\r\n');
        else conn.write('500 Unknown\r\n');
      });
    });

    server.listen(2525);
    return () => server.close();
  }, []);

  const current = emails[selected];

  return (
    <Box flexDirection="row" height={process.stdout.rows - 1}>
      {/* Email List */}
      <Box flexDirection="column" width="40%" borderStyle="round" borderColor="cyan" padding={1}>
        <Text bold color="cyan">📬 Emails ({emails.length})</Text>
        {emails.length === 0 ? (
          <Text dimColor>Waiting for emails on :2525...</Text>
        ) : (
          emails.map((email, i) => (
            <Text key={i} inverse={i === selected}>
              {email.time} {email.subject.slice(0, 25)}
            </Text>
          ))
        )}
      </Box>

      {/* Preview */}
      <Box flexDirection="column" width="60%" borderStyle="round" borderColor="cyan" padding={1}>
        <Text bold color="cyan">Preview {viewMode === 'headers' && '(Raw Headers)'}</Text>
        {current ? (
          <Box flexDirection="column">
            {viewMode === 'normal' ? (
              <>
                <Text><Text bold>From:</Text> {current.from}</Text>
                <Text><Text bold>To:</Text> {current.to}</Text>
                <Text><Text bold>Subject:</Text> {current.subject}</Text>
                <Text dimColor>{'─'.repeat(40)}</Text>
                <Text>{current.body.slice(0, 500)}</Text>
              </>
            ) : (
              <Text>{current.headers || 'No headers available'}</Text>
            )}
          </Box>
        ) : (
          <Text dimColor>Select an email</Text>
        )}
        <Box marginTop={1}>
          <Text dimColor>
            j/k: navigate • d: delete • o: open HTML • r: toggle headers • q: quit
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

render(<App />);
