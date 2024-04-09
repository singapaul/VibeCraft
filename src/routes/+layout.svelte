<script>
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { storedUser } from '$lib/stores';
</script>

{#if $storedUser}
	<Header />
{/if}
<main class="flex h-screen w-screen flex-col items-center justify-center bg-slate-300 px-4">
	<slot />
</main>
<Footer />
