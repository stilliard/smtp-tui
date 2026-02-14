---
feature: Terminal UI
status: complete
keywords: tui, ui, layout, panels, ink, react
---

# Terminal UI

## Overview
Two-panel terminal interface built with Ink (React for the terminal). Left panel lists emails, right panel shows a preview.

## Rules
- Left panel (40% width): email list showing time and truncated subject (25 chars)
- Right panel (60% width): preview with from/to/subject/body or raw headers
- Selected email is highlighted with inverse text
- Body preview is capped at 500 characters
- Shows "Waiting for emails on :2525..." when empty

## Implementation
`smtp-tui.tsx` — single `App` React component using Ink's `Box` and `Text`.

## Validation
- [ ] Panels render side-by-side filling terminal width
- [ ] Selection highlight follows j/k navigation
