<script>
	export let data;
	console.log(data.menu);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main>
	<section class="grid grid-cols-1 md:grid-cols-4 gap-4">
		{#each data.postData as post}
			<article>
				<div class="">
					<picture>
						<img
							src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
							alt="add alt atributes for all images"
						/>
					</picture>
					<h1 class="text-2xl mb-9 mt-9">{@html post.title.rendered}</h1>
					<div>
						{@html post.excerpt.rendered}
					</div>
				</div>
			</article>
		{/each}
	</section>
	<div class="pagination">
		<a href="#">Prev</a>
		<a href="#">Next</a>
	</div>
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
