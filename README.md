
# SMTP Terminal UI

An email SMTP sandbox with a terminal interface to receive and view emails in real-time.

## Features

- Simple terminal-based UI for viewing incoming emails
- Supports basic SMTP commands
- Real-time email display

## Development

We use [Bun](https://bun.sh/) as a super fast runtime and to simplify building the executable.

The Makefile includes commands to build and run the tui:

- `make install`: Install dependencies
- `make run`: Quick run via bun
- `make build`: Build the executables for each platform
- `make update-deps`: Update dependencies interactively with bun
