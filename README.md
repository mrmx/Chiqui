# <img src="./sites/docs/static/img/logo.svg" alt="Chiqui logo" width="96" height="96" valign="middle" /> Chiqui

[![npm version](https://img.shields.io/npm/v/@mrmx/chiqui.svg)](https://www.npmjs.com/package/@mrmx/chiqui)
[![CI](https://github.com/mrmx/Chiqui/actions/workflows/ci.yml/badge.svg)](https://github.com/mrmx/Chiqui/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

Content-driven SvelteKit SSG framework with i18n, mdsvex content pipeline, and DaisyUI components.

> Looking for **how to use Chiqui in your site**? See the package readme:
> **[packages/chiqui/README.md](./packages/chiqui/README.md)** or [`@mrmx/chiqui` on npm](https://www.npmjs.com/package/@mrmx/chiqui).

This repository is a pnpm monorepo containing the published package and its docs site.

## Repository Layout

```txt
.
├── packages/
│   └── chiqui/         # Reusable Svelte package — published to npm as @mrmx/chiqui
└── sites/
    └── docs/           # Reference docs site that dogfoods chiqui
```

## Development

Requires Node (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm --filter docs dev              # Dev server for docs site
pnpm --filter '@mrmx/chiqui' build  # Build the package
pnpm build                          # Build everything
pnpm -r check                       # svelte-check + TypeScript
pnpm -r test                        # All tests
pnpm format                         # Prettier
```

## Release

The `publish.yml` workflow publishes `@mrmx/chiqui` to npm on tags `v*`.

```bash
# bump packages/chiqui/package.json version, then:
git tag v0.1.x
git push origin v0.1.x
```

## License

MIT — see [LICENSE](./LICENSE).
