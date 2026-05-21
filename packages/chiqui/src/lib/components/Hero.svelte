<script lang="ts">
	import { siteName } from '$lib/config';

	let {
		content,
		title = siteName(),
		imageSrc,
		imageAlt = `${title} image`,
		actionUrl,
		actionText
	} = $props();
</script>

<div class="hero bg-base-200 min-h-[60vh]">
	<div class="hero-content flex-col lg:flex-row gap-6 text-center lg:text-left">
		{#if imageSrc}
			<img
				src={imageSrc}
				alt={imageAlt}
				class="w-1/3 max-w-sm rounded-lg shadow-2xl object-cover"
			/>
		{/if}

		<div class="max-w-md">
			<h1 class="text-4xl font-bold">{title}</h1>
			<p class="py-4 text-base">{content}</p>
			{#if actionUrl}
				<button class="btn btn-secondary" onclick={() => (window.location.href = actionUrl)}>
					{actionText}
				</button>
			{/if}
		</div>
	</div>
</div>
