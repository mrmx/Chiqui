<script lang="ts">
	import Icon from '@iconify/svelte';
	const { name, width = 20, height = width | 20, ...rest } = $props();
</script>

<Icon icon={name} {width} {height} {...rest} />
