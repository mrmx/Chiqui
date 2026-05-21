# <img src="./sites/docs/static/img/logo.svg" alt="Chiqui logo" width="96" height="96" valign="middle" /> Chiqui

[![npm version](https://img.shields.io/npm/v/chiqui.svg)](https://www.npmjs.com/package/chiqui)
[![npm downloads](https://img.shields.io/npm/dm/chiqui.svg)](https://www.npmjs.com/package/chiqui)
[![CI](https://github.com/mrmx/Chiqui/actions/workflows/ci.yml/badge.svg)](https://github.com/mrmx/Chiqui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2-ff3e00.svg?logo=svelte)](https://svelte.dev/docs/kit)

---
Chiqui is a lightweight, content-driven static site generator built on top of
[SvelteKit](https://svelte.dev/docs/kit). It is designed for small product sites, documentation sites, and
multilingual static websites where Markdown content is the source of truth.

The project provides a reusable Svelte package (`chiqui`) plus a docs site that
acts as the reference implementation.

## Features

- Markdown-first content in `content/{lang}/`.
- Built-in i18n routing with canonical IDs across translations.
- [SvelteKit](https://github.com/sveltejs/kit) static generation with [mdsvex](https://github.com/pngwn/MDsveX).
- Type-safe site config for metadata, languages, and navigation.
- Header, footer, logo, language selector, theme toggle, hero, carousel, and icon components.
- Content validation for duplicate routes, missing IDs, and translation lookup issues.
- Shared Vite and Svelte config helpers for consistent consumer projects.

## Repository Layout

```txt
.
├── packages/
│   └── chiqui/         # Reusable Svelte package
└── sites/
    └── docs/           # Reference docs site built with chiqui
```

## Requirements

- Node.js, matching `.nvmrc`
- pnpm

Install dependencies:

```bash
pnpm install
```

## Development

Run the docs site:

```bash
pnpm --filter docs dev
```

Build the package and docs site:

```bash
pnpm build
```

Run checks:

```bash
pnpm check
```

Run tests:

```bash
pnpm test
```

## Using Chiqui In A Site

Install the package in your SvelteKit site:

```bash
pnpm add chiqui
```

Create a root `config.ts`:

```ts
import type { AppConfig } from 'chiqui';

const config: AppConfig = {
	site: {
		name: 'My Site',
		logoUrl: '/img/logo.svg',
		copyright: 'My Company'
	},
	i18n: {
		defaultLang: 'en',
		supported: ['en', 'es']
	},
	nav: {
		header: {
			show: true,
			items: {
				en: [{ name: 'Home', href: '/en' }],
				es: [{ name: 'Inicio', href: '/es' }]
			}
		},
		footer: {
			show: true,
			items: {
				en: [],
				es: []
			}
		}
	}
};

export default config;
```

Initialize and re-export config helpers from `src/lib/config.ts`:

```ts
import rawConfig from '../../config';
import { initConfig } from 'chiqui/config';

initConfig(rawConfig, { validate: true });

export * from 'chiqui/config';
```

Load content from `src/lib/content.ts`:

```ts
import { createContent } from 'chiqui/content';

const modules = import.meta.glob('/content/**/*.md', { eager: true });

export const {
	contents,
	index,
	validateIndex,
	getContent,
	getTranslatedSlug,
	getHreflangAlternates,
	contentRoutes
} = createContent(modules);
```

Use the provided components in your layout:

```svelte
<script lang="ts">
	import { Header, Footer } from 'chiqui/components';
	import { showFooter } from '$lib/config';
	import { getTranslatedSlug } from '$lib/content';

	let { children } = $props();
</script>

<Header {getTranslatedSlug} />

<main>
	{@render children?.()}
</main>

{#if showFooter()}
	<Footer />
{/if}
```

## Content Model

Content files live in `content/{lang}/{slug}.md`.

```md
---
id: home
title: Welcome
---

Hello world.
```

The `id` field is the canonical content identifier. Use the same `id` across
languages to connect translations:

```txt
content/en/about.md     # id: about
content/es/acerca.md    # id: about
```

Routes are generated from the language and slug:

```txt
content/en/about.md  -> /en/about
content/es/acerca.md -> /es/acerca
content/en/index.md  -> /en
```

## Package Exports

Chiqui exposes focused entry points:

- `chiqui`
- `chiqui/config`
- `chiqui/content`
- `chiqui/components`
- `chiqui/navigation`
- `chiqui/vite`
- `chiqui/svelte-config`
- `chiqui/types`

## Docs Site

The `sites/docs` project is the canonical working example. It shows:

- root site config
- content loading with `import.meta.glob`
- multilingual Markdown content
- catch-all routing
- shared Chiqui components
- Tailwind CSS 4 and DaisyUI integration

## License

MIT — see [LICENSE](./LICENSE).
