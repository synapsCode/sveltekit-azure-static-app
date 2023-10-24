<script>
	import mainNav from '../lib/data/mainNav.json';
	import Menu from './Menu.svelte';

	//TODO: jak zasymulować Promis dla pliku json
	console.log(mainNav);

	//TODO: zorganizować stałe
	const username = 'Mirek';
	const password = '9Dwj 7RH7 EnoC i6NC NbEQ JNIX';
	const authHeader = `Basic ${btoa(`${username}:${password}`)}`;
	const headersList = {
		Authorization: authHeader
	};
</script>

<header class="flex py-5">
	<div class="logo flex-none w-14 h-14">
		<img
			src="https://imagesforportal.blob.core.windows.net/sporten/sporten.logo1.jpg"
			alt="sporten logo"
		/>
	</div>
	<Menu />
</header>

<style>
</style>
