<script lang="ts">
	import type { PageData } from './$types';
	import { faHome } from '@fortawesome/free-solid-svg-icons';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/components/Footer.svelte';
	export let data: PageData;

	import { logEvent } from 'firebase/analytics';
	import { analytics } from '$lib/firebase';

	if (analytics) {
		console.log('logging page view');
		logEvent(analytics, 'page_view', {
			page_path: window.location.pathname
			// Add any other page-specific parameters you might need
		});
	} else {
		console.log('not logging');
	}
</script>

<section class="flex h-full w-screen flex-col overflow-hidden">
	<div class="flex items-center justify-between px-6">
		<h1 class="m-4 w-full text-2xl font-bold">Here are some previous prompts</h1>
		<a href={`/`} rel="noopener noreferrer" class=""><Icon data={faHome} class="m-3" scale={3} /></a
		>
	</div>

	<ul class="flex-1 list-disc overflow-auto px-8 pb-24 pt-4 text-lg">
		{#each data.typed as item}
			<li>{item.prompt}</li>
		{/each}
	</ul>
</section>
<Footer />
