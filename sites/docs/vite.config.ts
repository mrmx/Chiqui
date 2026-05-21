import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, mergeConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { chiquiViteConfig } from 'chiqui/vite';

export default defineConfig(
	mergeConfig(chiquiViteConfig(), {
		plugins: [tailwindcss(), sveltekit()]
	})
);
