<script lang="ts">
	import SunIcon from './SunIcon.svelte';
	import MoonIcon from './MoonIcon.svelte';
	let { dark } = $props();
</script>

<label class="swap swap-rotate">
	<input
		type="checkbox"
		class="theme-controller"
		value="dark"
		checked={dark}
		aria-label="Toggle theme"
		title="Toggle theme"
	/>
	<SunIcon class="swap-off" />
	<MoonIcon class="swap-on" />
</label>
