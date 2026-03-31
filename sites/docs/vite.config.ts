import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { chikyViteConfig } from 'chiky/vite';

export default defineConfig(
	mergeConfig(chikyViteConfig(), {
		plugins: [tailwindcss(), sveltekit()]
	})
);
