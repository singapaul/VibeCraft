<script lang="ts">
	import { getContext } from 'svelte';
	import Button from './ui/button/button.svelte';
	type ContextProps = {
		close: (
			callbacks: MouseEvent & {
				currentTarget: EventTarget & HTMLButtonElement;
			}
		) => void;
	};

	const { close } = getContext<ContextProps>('simple-modal');

	export let playlistId: string;
</script>

<section class="flex flex-col">
	<h2 class="mb-5 text-3xl font-bold">Groovy baby!</h2>
	<p class="mb-3">You sucessfully created your Spotify playlist!</p>
	<p class="mb-3">You can find the new playlist at the top of the playlist sidebar on Spotify.</p>

	<div class="mt-4 flex w-full flex-col gap-2 sm:flex-row">
		<a
			href={`https://open.spotify.com/playlist/${playlistId}`}
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
			>Listen on spotify now</a
		>
		<Button class="w-full" type="button" variant="secondary" on:click={close}
			>Create a new playlsit</Button
		>
	</div>
</section>
