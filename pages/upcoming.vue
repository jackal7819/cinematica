<script setup>
	const { data: movies } = await useFetch('/api/fetchUpcoming');
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
