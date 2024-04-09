<script>
	import '../app.pcss';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { storedUser } from "$lib/stores";
</script>

{#if $storedUser}
<Header /> 
{/if}
<main class="h-screen w-screen bg-slate-300 flex flex-col items-center justify-center px-4">
	<slot />
</main>
<Footer/>
