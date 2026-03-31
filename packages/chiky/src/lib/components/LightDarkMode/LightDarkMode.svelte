<script lang="ts">
	import LDIconToggle from './LDIconToggle.svelte';
	import LDSwitch from './LDSwitch.svelte';
	let { icon = true } = $props();
	let dark = false;
</script>

{#if icon}
	<LDIconToggle {dark} />
{:else}
	<LDSwitch {dark} />
{/if}
