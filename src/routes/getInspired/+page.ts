/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { PageLoad } from './$types';
import { db } from '$lib/firebase';
import { collection, query, getDocs, Timestamp } from 'firebase/firestore';
export const load = (async () => {
	type FireBaseResponse = {
		prompt: string;
		createdAt: Timestamp;
	};

	const q = query(collection(db, 'prompts'));
	const querySnapshot = await getDocs(q);
	const data = querySnapshot.docs.map((doc) => {
		// doc.data() is never undefined for query doc snapshots
		return {
			id: doc.id, // This adds the document ID to your data object
			...doc.data(), // This spreads the document data into the object
			ref: doc.ref.path // Optional: includes the full path to the document reference
		};
	});

	// @ts-expect-error
	const typed: FireBaseResponse[] = data;

	return {
		typed
	};
}) satisfies PageLoad;
