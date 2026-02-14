---
feature: SMTP Server
status: complete
keywords: smtp, server, email, receive, port
---

# SMTP Server

## Overview
A basic SMTP server on localhost:2525 that accepts any email for local development testing. Any credentials are accepted.

## Rules
- Listens on port 2525
- Supports: HELO, EHLO, MAIL FROM, RCPT TO, DATA, QUIT, RSET, NOOP
- Unknown commands get a 500 response
- Emails are parsed via mailparser and prepended to the email list (newest first)
- HTML body and raw headers are preserved when available

## Implementation
`smtp-tui.tsx` — `useEffect` hook creates a `net.createServer` on mount, closes on unmount.

## Validation
- [ ] Send an email via `swaks --to test@test.com --server localhost:2525` and confirm it appears
- [ ] Invalid commands return 500
