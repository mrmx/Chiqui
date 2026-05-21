<script lang="ts">
	import { siteLogo, siteName } from '$lib/config';

	const name = siteName();
	const logo = siteLogo();
</script>

<a href="/" class="flex items-center gap-2 px-2 text-xl font-bold">
	{#if logo}
		<img
			src={logo}
			alt={`${name} logo`}
			class="h-8 [filter:drop-shadow(0_0_2px_rgba(255,255,255,.9))] dark:[filter:drop-shadow(0_0_3px_rgba(255,255,255,.85))]"
		/>
	{/if}
	<span>{name}</span>
</a>
