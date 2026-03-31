<script lang="ts">
	import SunIcon from './SunIcon.svelte';
	import MoonIcon from './MoonIcon.svelte';
	let { dark } = $props();
</script>

<label class="flex items-center gap-2 cursor-pointer select-none">
	<SunIcon />
	<input
		type="checkbox"
		class="toggle theme-controller toggle-sm"
		value="dark"
		checked={dark}
		aria-label="Toggle theme"
		title="Toggle theme"
	/>
	<MoonIcon />
</label>
