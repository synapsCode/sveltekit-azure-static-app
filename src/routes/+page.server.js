/** @type {import('./$types').PageLoad} */

import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	const url = 'https://sporten.com/wp-json/wp/v2';
	const apiKey = '9Dwj 7RH7 EnoC i6NC NbEQ JNIX';

	const responsePosts = await fetch(`${url}/posts?_embed&per_page=20`);
	if (responsePosts.status === 404) {
		throw error(404, 'not longer in');
	}
	const postData = await responsePosts.json();

	// const responseMenu = await fetch(`${url}/menu-locations`, {
	// 	headers: {
	// 		User: 'Mirek',
	// 		Password: '9Dwj 7RH7 EnoC i6NC NbEQ JNIX'
	// 	}
	// });
	// TODO: jeżeli nie ma menu to nie wiem co dalej daj jakeś podstawowe menu ręcznie utworzeone

	// const menu = responseMenu.json();

	return {
		postData
	};
}
