.PHONY: build help

GIT_COMMIT_SHA := $(shell git rev-parse HEAD)
ifneq ($(shell git status --porcelain),)
    GIT_COMMIT_SHA := $(GIT_COMMIT_SHA)-dirty
endif


help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: package.json ## install dependencies
	@npm install

dev: ## run dev server
	@npm run dev

build: ## build src to dist
	@npm build

build-docker: ## build docker image
	@docker build --build-arg GIT_COMMIT_SHA=$(GIT_COMMIT_SHA) -t todomvc .
	@docker tag todomvc:latest nocalhost-web:$(GIT_COMMIT_SHA)

clean: ## remove build directory
	rm -fr build