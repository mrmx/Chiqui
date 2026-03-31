import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createSvelteConfig } from 'chiky/svelte-config';

export default createSvelteConfig(adapter, vitePreprocess, mdsvex);
