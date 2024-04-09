<script lang="ts">
	import * as yup from 'yup';
	import { storedUser } from '$lib/stores';
	import { createForm } from 'svelte-forms-lib';
	import { getSongs, searchSongs } from '$lib/api';

	import Button from './ui/button/button.svelte';
	import Modal from 'svelte-simple-modal';
	import RandomFactsOverlay from './RandomFactsOverlay.svelte';
	import ModalContent from './ModalContent.svelte';
	let playlistCreationPending: boolean;
	let playlistId = '';
	let isGenerationDone = false;
	type FormFields = {
		prompt: string;
		count: number;
	};

	const handlePlaylistCreation = async (values: FormFields) => {
		try {
			playlistCreationPending = true;

			//   const artistIds = values.artists.map((artist: SelectValues) => artist.id);
			const { count, prompt } = values;

			const playlistObject = $storedUser && (await getSongs({ prompt, count, user: $storedUser }));

			playlistId = playlistObject?.id || '';

			handleReset();
			playlistCreationPending = false;
			isGenerationDone = true;
			// Open a modal with the new link
		} catch (e) {
			console.error(e);
		}
	};

	const { form, errors, isValid, isSubmitting, handleChange, handleSubmit, handleReset } =
		createForm<FormFields>({
			initialValues: {
				prompt: '',
				count: 20
			},
			validationSchema: yup.object().shape({
				prompt: yup.string().required('Prompt required'),
				count: yup.number()
			}),
			onSubmit: async (values) => {
				await handlePlaylistCreation(values);
			}
		});
</script>

{#if playlistCreationPending}
	<RandomFactsOverlay />
{/if}

<section class="img-bg mx-4 w-full sm:max-w-96">
	<div class="gradient-bg">
		<form
			method="post"
			on:submit={handleSubmit}
			name="playlistCreation"
			class="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
		>
			<div class="mb-6">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="prompt"> Prompt </label>

				<input
					class="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					name="prompt"
					id="prompt"
					type="text"
					placeholder="Please enter a prompt"
					class:!border-red-600={$errors.prompt}
					on:keyup={handleChange}
					bind:value={$form.prompt}
				/>
				<p class="text-xs italic text-slate-600">Best results come from 5-6 word phrases</p>
				{#if $errors.prompt}
					<small class="form-validation-error">{$errors.prompt}</small>
				{/if}
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm font-bold text-gray-700" for="count"> No. of Songs </label>
				<input
					class="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					name="count"
					id="count"
					type="number"
					min={5}
					class:!border-red-600={$errors.count}
					on:keyup={handleChange}
					bind:value={$form.count}
				/>
				<p class="text-xs italic text-slate-600">How many songs?</p>
			</div>

			<Button
				type="submit"
				class="btn-spotify w-full disabled:cursor-not-allowed disabled:opacity-50"
				disabled={!$isValid || $isSubmitting}
			>
				Create new playlist
			</Button>
		</form>
	</div>
</section>

<Modal>
	<ModalContent {playlistId} {isGenerationDone} />
</Modal>
