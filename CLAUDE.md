# smtp-tui

smtp-tui is a local SMTP sandbox — a single-file TUI app that receives emails on localhost:2525 and displays them in a two-panel terminal interface. Built for dev/testing so you can see outgoing emails without actually sending them.

## Stack
- **Runtime:** Bun
- **UI:** Ink (React for the terminal) + React 19
- **Email parsing:** mailparser
- **Source:** single file — `smtp-tui.tsx`
- **Run:** `make run` (or `bun run smtp-tui.tsx`)
- **Build:** `make build` — cross-compiles to linux, macOS (arm64/x64), windows

## Feature Specs
This project uses KISS Specs. Feature specifications live in `.specs/`. Each markdown file describes a feature: what it does, why, how it's built, and how to validate it. Read the relevant spec before working on a feature. Use keywords in frontmatter to find related features. Template: `.specs/_template.md`.
