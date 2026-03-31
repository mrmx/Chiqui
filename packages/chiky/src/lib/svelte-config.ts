/**
 * SvelteKit config helper for chiky sites.
 *
 * Usage in your site's svelte.config.js:
 * ```js
 * import { createSvelteConfig } from 'chiky/svelte-config';
 * export default createSvelteConfig();
 * ```
 */

export interface ChikySvelteConfigOptions {
	/** Extra aliases beyond $config */
	aliases?: Record<string, string>;
}

/**
 * Creates a standard SvelteKit config for chiky sites.
 * Must be called in svelte.config.js where adapter/preprocessors are available.
 */
export function createSvelteConfig(
	adapter: any,
	vitePreprocess: any,
	mdsvex: any,
	options: ChikySvelteConfigOptions = {}
) {
	const mdsvexOptions = { extensions: ['.md'] };

	return {
		preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
		kit: {
			adapter: adapter(),
			alias: {
				$config: './config.ts',
				...options.aliases
			}
		},
		extensions: ['.svelte', '.svx', '.md']
	};
}
