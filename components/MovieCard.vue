<script setup>
	const { movie } = defineProps(['movie']);
</script>

<template>
	<div>
		<!-- <h1 class="text-3xl font-bold underline">{{ movie.title }}</h1>
		<p class="text-xl">{{ movie.overview }}</p>
		<p>{{ movie.release_date }}</p>
		<p>{{ movie.vote_average }}</p> -->
		<img
			:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
			class="object-cover duration-300 rounded-lg shadow-md cursor-pointer h-[450px] shadow-sky-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500 w-[300px]"
		/>
		<!-- <img :src="`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`" /> -->
	</div>
</template>
