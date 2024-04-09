<script lang="ts">
	import { storedToken } from '$lib/stores';
	import Login from '$lib/components/Login.svelte';
	import PlaylistCreationForm from '$lib/components/PlaylistCreationForm.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { logEvent } from 'firebase/analytics';
	import { analytics } from '$lib/firebase';

	if (analytics) {
		logEvent(analytics, 'page_view', {
			page_path: window.location.pathname
			// Add any other page-specific parameters you might need
		});
	}
</script>

{#if $storedToken}
	<PlaylistCreationForm />
{:else}
	<Login />
{/if}
<Footer />
