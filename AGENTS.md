# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Overview

Chiky is an open-source, content-driven SSG framework built on SvelteKit + mdsvex. This is a pnpm monorepo.

## Structure

```
packages/chiky/     # The npm package — lib (types, config, content, navigation) + Svelte components
sites/docs/         # Documentation site that dogfoods chiky as a dependency
```

## Commands

```bash
pnpm install                      # Install all workspace deps
pnpm --filter chiky build         # Build the chiky package (svelte-package → dist/)
pnpm --filter docs dev            # Dev server for docs site
pnpm --filter docs build          # Production build for docs site
pnpm --filter docs test           # Run vitest for docs site
pnpm --filter docs check          # svelte-check + TypeScript validation
pnpm build                        # Build chiky package then docs site
pnpm test                         # Run all tests across workspace
```

## Architecture

### packages/chiky

Exports via subpath exports (`chiky`, `chiky/config`, `chiky/content`, `chiky/components`, `chiky/navigation`, `chiky/vite`, `chiky/svelte-config`).

Key design decisions:
- **`initConfig(rawConfig)`** — consumer provides their AppConfig, chiky caches and exposes helpers (siteName, navItems, etc.)
- **`createContent(modules)`** — factory that takes `import.meta.glob` result from the consumer (Vite glob must run in consumer context)
- **`createSvelteConfig(adapter, vitePreprocess, mdsvex)`** — generates standard SvelteKit config
- **`chikyViteConfig()`** — returns Vite config with test/coverage defaults
- Components use `$lib/` imports internally (resolved by svelte-package during build)

### Consumer pattern (sites/docs shows the canonical example)

1. `config.ts` (root) — site-specific AppConfig (name, logo, nav, i18n)
2. `src/lib/config.ts` — calls `initConfig(rawConfig)` and re-exports helpers
3. `src/lib/content.ts` — calls `createContent(import.meta.glob(...))` and re-exports
4. `src/hooks.server.ts` — imports config (triggers init) + validates content
5. Routes import from `$lib/config` and `$lib/content` (the site's thin wrappers)
6. Layout uses `<Header />` and `<Footer />` from `chiky/components`

### Content system

- Markdown files in `content/{lang}/{slug}.md` with frontmatter `id` (canonical cross-language identifier)
- Build-time validation: unique slugs per lang, unique (id, lang) pairs
- i18n via `getTranslatedSlug()` using canonical IDs

## Stack

SvelteKit 2 + Svelte 5 (runes) + mdsvex + Tailwind CSS 4 + DaisyUI 5 + Vite 7 + TypeScript
