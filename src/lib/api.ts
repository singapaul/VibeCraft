import SpotifyWebApi from 'spotify-web-api-js';
import { db } from '$lib/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import type { FormFields } from './types';

const spotifyApi = new SpotifyWebApi();

export const createPlaylist = async (user: { id: string }, values: FormFields) => {
	const { prompt } = values;

	const response = await spotifyApi.createPlaylist(user.id, {
		name: prompt,
		public: true
	});
	return response;
};

export async function getSongs({
	prompt,
	count,
	user
}: {
	prompt: string;
	count: number;
	user: SpotifyApi.CurrentUsersProfileResponse;
}) {
	const response = await fetch('https://node-express-starter-2022.onrender.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt,
			count
		})
	});

	if (response.ok) {
		const data = await response.json();

		return await searchSongs({ playlist: data.data, user, prompt });
		// Handle success response
	} else {
		console.error('Error:', response.statusText);
		// Handle error response
	}
}

type SongArtist = {
	song: string;
	artist: string;
};

export async function searchSongs({
	playlist,
	user,
	prompt
}: {
	playlist: SongArtist[];
	user: SpotifyApi.CurrentUsersProfileResponse | undefined;
	prompt: string;
}) {
	const queries = playlist.map((track) => `${track.artist} ${track.song}`);

	if (!user) return;
	// This initiates the search for each songArtistQuery but does not await their resolution here.
	const promiseArray = queries.map(searchSongSpotify);

	// Promise.all waits for all promises in the array to resolve and then returns an array of results.
	const IdArray = await Promise.all(promiseArray);

	const finArray = IdArray.map((id) => `spotify:track:${id}`);

	const created_playlist = await spotifyApi.createPlaylist(user.id, {
		name: prompt,
		description: prompt,
		public: true
	});

	console.log(user);

	await spotifyApi.addTracksToPlaylist(created_playlist.id, finArray);

	await addDoc(collection(db, 'prompts'), {
		prompt,
		postedBy: user.display_name,
		userAccount: user,
		createdAt: serverTimestamp()
	});

	return created_playlist;
}

async function searchSongSpotify(songArtistQuery: string) {
	const id = await spotifyApi.searchTracks(songArtistQuery);

	return id.tracks.items[0].id; // Returns the ID string, to be collected by Promise.all.
}
