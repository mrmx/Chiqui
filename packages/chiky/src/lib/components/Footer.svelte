<script lang="ts">
	import { siteName, siteLogo, footerNavItems, isLink, isGroup, defaultLang } from '$lib/config';
	import Icon from './Icon.svelte';
	import NavLink from './NavLink.svelte';
	import SiteLogo from './SiteLogo.svelte';

	const NAME = siteName();
	const YEAR = new Date().getFullYear();

	let { lang = defaultLang() } = $props();

	const navItems = footerNavItems(lang);
</script>

<footer class="footer">
	<aside class="self-center text-center sm:text-left">
		<SiteLogo />
		<p class="mt-4 text-sm opacity-60">&copy; {YEAR} {NAME}. All rights reserved.</p>
	</aside>
	{#each navItems as item}
		{#if isGroup(item)}
			<nav>
				<h6 class="footer-title">{item.title ?? item.name}</h6>
				<div class="flex flex-col gap-1">
					{#each item.items as child}
						<NavLink node={child} />
					{/each}
				</div>
			</nav>
		{:else}
			<NavLink node={item} />
		{/if}
	{/each}
</footer>
