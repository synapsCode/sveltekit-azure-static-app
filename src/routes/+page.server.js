/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const response = await fetch('https://sporten.com/wp-json/wp/v2/posts?_embed&per_page=5');
	if (response.status === 404) {
		throw error(404, 'not longer in');
	}
	const postData = await response.json();

	return {
		postData
	};
}
