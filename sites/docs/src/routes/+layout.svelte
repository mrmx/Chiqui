<script lang="ts">
	import '../app.css';
	import { Header, Footer } from 'chiky/components';
	import { showFooter } from '$lib/config';
	import { getTranslatedSlug } from '$lib/content';

	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<Header {getTranslatedSlug} />

	<main class="flex-1">
		<div class="content">
			{@render children?.()}
		</div>
	</main>

	{#if showFooter()}
		<Footer />
	{/if}
</div>
