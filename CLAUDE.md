# smtp-tui

smtp-tui is a local SMTP sandbox — a single-file TUI app that receives emails on localhost:2525 and displays them in a two-panel terminal interface. Built for dev/testing so you can see outgoing emails without actually sending them.

## Stack
- **Runtime:** Bun
- **UI:** Ink (React for the terminal) + React 19
- **Email parsing:** mailparser
- **Source:** single file — `smtp-tui.tsx`
- **Run:** `make run` (or `bun run smtp-tui.tsx`)
- **Build:** `make build` — cross-compiles to linux, macOS (arm64/x64), windows
