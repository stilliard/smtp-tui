
# SMTP Terminal UI

An email SMTP sandbox with a terminal interface to receive and view emails in real-time.

## Features

- Simple terminal-based UI for viewing incoming emails
- Supports basic SMTP commands
- Real-time email display
- Email preview with headers and body in plain text via terminal
- Ability to view raw email headers
- Keyboard shortcut to open full HTML email in your browser
- Cross-platform builds for Windows, macOS, and Linux

## Development

We use [Bun](https://bun.sh/) as a super fast runtime and to simplify building the executable.

The Makefile includes commands to build and run the tui:

- `make install`: Install dependencies
- `make run`: Quick run via bun
- `make build`: Build the executables for each platform
- `make update-deps`: Update dependencies interactively with bun

## Usage as an SMTP Server

Set the SMTP server to `localhost` on port `2525` in your email client or application to send emails to this TUI.
(Any username/password is currently accepted as this is intended for local testing only.)
