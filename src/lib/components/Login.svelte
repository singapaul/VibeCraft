<script lang="ts">
	import { onMount } from 'svelte';
	import { storedToken, storedUser } from '../stores';
	import { faSpotify } from '@fortawesome/free-brands-svg-icons';
	import Icon from 'svelte-awesome';
	import { faBrain } from '@fortawesome/free-solid-svg-icons';

	import SpotifyApi from 'spotify-web-api-js';
	import { goto } from '$app/navigation';
	import Button from './ui/button/button.svelte';
	const spotifyApi = new SpotifyApi();
	const authEndpoint = 'https://accounts.spotify.com/authorize';
	const clientId = 'db85402fb68a4860a34d7106b6a72330';
	const redirectUri = 'https://moody-13597.web.app/';
	const scopes = ['playlist-modify-public', 'playlist-modify-private', 'ugc-image-upload'];

	const handleInspiration = () => {
		window.location.href = '/getInspired';
	};

	const handleSpotifyLogin = () => {
		const spotifyAuthURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
			'%20'
		)}&response_type=token&show_dialog=true`;

		window.location.href = spotifyAuthURL;
	};

	const setAccessToken = () => {
		const hashFromURL: {
			access_token: string;
			expires_in: string;
			token_type: string;
		} = window.location.hash
			.slice(1)
			.split('&')
			.reduce(
				function (
					initial: {
						access_token: string;
						expires_in: string;
						token_type: string;
					},
					item
				) {
					if (item) {
						var parts = item.split('=');
						// @ts-expect-error Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ access_token: string; expires_in: string; token_type: string; }'.
						initial[parts[0]] = decodeURIComponent(parts[1]);
					}
					return initial;
				},
				{ access_token: '', expires_in: '', token_type: '' }
			);

		storedToken.set(hashFromURL.access_token);
		spotifyApi.setAccessToken($storedToken);
	};

	onMount(() => {
		setAccessToken();

		if ($storedToken) {
			void getUserInformation();
		}
	});

	const getUserInformation = async () => {
		try {
			const response = await getMe();
			storedUser.set(response);
		} catch {
			storedToken.set(null);
			storedUser.set(undefined);
			await goto('/');
		}
	};

	const getMe = async () => {
		const response = await spotifyApi.getMe();

		return response;
	};
</script>

<section class="flex flex-col items-center gap-8">
	<h1 class="mt-10 text-center text-4xl font-bold text-gray-800">Welcome to VibeCraft!</h1>
	<p class="max-w-80 text-center text-xl text-gray-600">
		Craft your perfect Spotify playlist with just a prompt. Enter your musical mood or the silliest
		of random prompts, and let us do the magic in your Spotify account.
	</p>
	<div class="flex flex-col gap-4">
		<Button on:click={handleSpotifyLogin} class="flex justify-between p-8"
			>Login with spotify<Icon data={faSpotify} class="p  m-3" scale={2} /></Button
		>
		<Button on:click={handleInspiration} class="flex justify-between p-8" variant="secondary"
			>Looking for inspiration?<Icon data={faBrain} class="p  m-3" scale={2} /></Button
		>
	</div>
</section>
