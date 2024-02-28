<script setup>
	const { movie } = defineProps(['movie']);
	// `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
</script>

<template>
	<div>
		<!-- <h1 class="text-3xl font-bold underline">{{ movie.title }}</h1>
		<p class="text-xl">{{ movie.overview }}</p>
		<p>{{ movie.release_date }}</p>
		<p>{{ movie.vote_average }}</p> -->
		<img
			:src="
				movie.poster_path !== null
					? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
					: `https://placehold.co/300x450/BAE6FD/94A3B8?text=${movie.title}`
			"
			class="object-cover duration-300 rounded-lg shadow-md cursor-pointer h-[450px] shadow-sky-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500 w-[300px]"
		/>
		<!-- <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" /> -->
	</div>
</template>
