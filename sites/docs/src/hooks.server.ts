import type { ServerInit } from '@sveltejs/kit';
// Import config to trigger initConfig()
import '$lib/config';
import { contents, validateIndex } from '$lib/content';

console.log('Server hooks loaded');
console.log(
	`Loaded ${contents.length} content entries:`,
	JSON.stringify(
		contents.map((c) => ({ lang: c.lang, slug: c.slug, meta: c.metadata })),
		null,
		2
	)
);

export const init: ServerInit = async () => {
	console.log('Server init');
	if (!validateIndex()) {
		console.error('Content validation failed');
	}
};
