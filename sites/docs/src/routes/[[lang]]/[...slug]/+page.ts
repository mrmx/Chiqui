import { error } from '@sveltejs/kit';
import { getContent } from '$lib/content';
import { defaultLang } from '$lib/config';

export function load({ params }) {
	let { lang = '', slug } = params;
	if (lang === '') {
		lang = defaultLang();
	}
	const entry = getContent(lang, slug);
	if (!entry) {
		throw error(404, 'Not found');
	}

	return {
		lang,
		slug,
		metadata: entry.metadata,
		component: entry.component
	};
}
