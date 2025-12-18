
# SMTP email sandbox with terminal UI

An email SMTP sandbox with a terminal interface to receive and view emails in real-time.

## Installation

Check out the [Releases](https://github.com/stilliard/smtp-tui/releases) page for pre-built binaries for Windows, macOS, and Linux.

For Linux, download the `smtp-tui-linux` binary from the releases page, make it executable with `chmod +x smtp-tui-linux`, and run it using `./smtp-tui-linux`. Then make it globally available with `sudo mv smtp-tui-linux /usr/local/bin/smtp-tui` and you can now call `smtp-tui` anytime.

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
