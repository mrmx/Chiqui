<script lang="ts">
	import type { PageProps } from './$types';
	import { siteName } from '$lib/config';
	let { data }: PageProps = $props();
	let metadata = $derived(data.metadata);
	let Page = $derived(data.component);
	const pageTitle = $derived(`${siteName()}${metadata?.title ? ' - ' + metadata.title : ''}`);
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>

{#if metadata?.title}
	<h1>{metadata.title}</h1>
{/if}

<Page />
