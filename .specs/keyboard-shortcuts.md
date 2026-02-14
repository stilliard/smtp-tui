---
feature: Keyboard Shortcuts
status: complete
keywords: keys, navigation, shortcuts, input
---

# Keyboard Shortcuts

## Overview
Vim-style and arrow key navigation with single-key actions.

## Rules
- `j` / `Down`: select next email
- `k` / `Up`: select previous email
- `d`: delete selected email
- `o`: open HTML body in browser (writes to `/tmp/email-{timestamp}.html`, opens with `xdg-open`)
- `r`: toggle between normal preview and raw headers view
- `q`: quit

## Implementation
`smtp-tui.tsx` — `useInput` hook from Ink.

## Validation
- [ ] Each key performs its documented action
- [ ] `o` is a no-op when the email has no HTML body
