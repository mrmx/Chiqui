<script lang="ts">
	import type { NavNode } from '$lib/config';
	import { isLink } from '$lib/config';
	import Icon from './Icon.svelte';

	const {
		node,
		class: className = '',
		...rest
	}: { node: NavNode; class?: string; [rest: string]: any } = $props();
</script>

{#if isLink(node)}
	<a
		class={`link link-hover inline-flex items-center gap-2 ${className}`.trim()}
		{...rest}
		href={node.href}
		title={node.title}
		target={node.target ?? undefined}
		rel={(node.target ?? undefined) === '_blank' ? 'noopener noreferrer' : undefined}
	>
		{#if node.icon}<Icon name={node.icon} />{/if}
		{node.name ?? node.title ?? ''}
	</a>
{/if}
