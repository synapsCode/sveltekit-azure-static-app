<script>
	export let data;
	console.log(data.postData[0]);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main class="pt-7 pb-7">
	{#each data.postData as post}
		<article>
			<h1 class="text-3xl mb-9 mt-9">{@html post.title.rendered}</h1>
			<div class="flex">
				<picture>
					<img src={post['_embedded']['wp:featuredmedia'][0]['source_url']} />
				</picture>
				<div>
					{@html post.excerpt.rendered}
				</div>
			</div>
		</article>
	{/each}
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
