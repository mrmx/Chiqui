/**
 * SvelteKit config helper for chiqui sites.
 *
 * Usage in your site's svelte.config.js:
 * ```js
 * import { createSvelteConfig } from 'chiqui-ssg/svelte-config';
 * export default createSvelteConfig();
 * ```
 */

export interface ChiquiSvelteConfigOptions {
	/** Extra aliases beyond $config */
	aliases?: Record<string, string>;
}

/**
 * Creates a standard SvelteKit config for chiqui sites.
 * Must be called in svelte.config.js where adapter/preprocessors are available.
 */
export function createSvelteConfig(
	adapter: any,
	vitePreprocess: any,
	mdsvex: any,
	options: ChiquiSvelteConfigOptions = {}
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
