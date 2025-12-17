.PHONY: run build install update-deps

TARGETS=linux darwin-arm64 darwin-x64 windows
BUILD_DIR=build
SRC_FILE=smtp-tui.tsx
BINARY_NAME=smtp-tui

install:
	bun install

update-deps:
	bun update -i

run:
	bun run ${SRC_FILE}

build:
	mkdir -p ${BUILD_DIR}
	rm -rf ${BUILD_DIR}/*
	for target in ${TARGETS}; do \
		make --no-print-directory build-$$target; \
	done

build-%:
	@ext=""; [ "$*" = "windows" ] && ext=".exe"; \
	bun build $(SRC_FILE) --compile --target=bun-$* --outfile $(BUILD_DIR)/$(BINARY_NAME)-$*$$ext
