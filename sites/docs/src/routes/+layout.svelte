<script lang="ts">
	import '../app.css';
	import { Header, Footer } from 'chiky/components';
	import { showFooter } from '$lib/config';

	let { children } = $props();
</script>

<Header />

<main>
	<div class="content">
		{@render children?.()}
	</div>
</main>
{#if showFooter()}
	<Footer />
{/if}
