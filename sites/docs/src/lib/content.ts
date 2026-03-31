import { createContent } from 'chiky/content';

const modules = import.meta.glob('/content/**/*.md', { eager: true });

export const { contents, index, validateIndex, getContent, getTranslatedSlug, getHreflangAlternates, contentRoutes } = createContent(modules);
