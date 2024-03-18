GIT_TAG=$(git log -1 --pretty=%h)

help:
	@echo 'For convenience'
	@echo
	@echo 'Available make targets:'
	@grep PHONY: Makefile | cut -d: -f2 | sed '1d;s/^/make/'

all: build push

.PHONY: build      # Build image
build:
	docker compose build
	env GIT_TAG=$(GIT_TAG) docker compose build

.PHONY: push       # Push image
push:
	docker compose push
	env GIT_TAG=$(GIT_TAG) docker compose push
