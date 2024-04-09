<script lang="ts">
  import { getContext } from 'svelte';
import Button from './ui/button/button.svelte';
  type ContextProps = {
    close: (
      callbacks: MouseEvent & {
        currentTarget: EventTarget & HTMLButtonElement;
      },
    ) => void;
  };

  const { close } = getContext<ContextProps>('simple-modal');

  export let playlistId: string;
</script>

<section class="flex flex-col">
<h2 class="mb-5 text-3xl font-bold">Groovy baby!</h2>
<p class="mb-3">You sucessfully created your Spotify playlist!</p>
<p class="mb-3">
  You can find the new playlist at the top of the playlist sidebar on Spotify.
</p>

<div class='flex flex-col sm:flex-row gap-2 w-full mt-4'>
  <a
  href={`https://open.spotify.com/playlist/${playlistId}`}
  target="_blank"
  rel="noopener noreferrer"
  class="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full">Listen on spotify now</a
>
<Button class='w-full' type='button' variant='secondary' on:click={close}>Create a new playlsit</Button>
</div>
</section>