<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app container mx-auto">
	<Header />
	<slot />

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
