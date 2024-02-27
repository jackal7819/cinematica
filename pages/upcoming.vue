<script setup>
	const movies = ref([]);
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: process.env.API_KEY,
		},
	};

	fetch(
		'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
		options
	)
		.then((response) => response.json())
		.then((response) => {
			movies.value = response.results;
			console.log(movies.value); // Перемещаем console.log сюда
		})
		.catch((err) => console.error(err));
</script>

<template>
	<main class="py-10">
		<h1 class="mb-10 text-3xl font-bold underline">Upcoming Movies</h1>
		<div
			class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
		>
			<MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
		</div>
	</main>
</template>
