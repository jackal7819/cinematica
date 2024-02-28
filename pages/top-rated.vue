<script setup>
	const searchTerm = ref('');
	const url = computed(() => `api/movies/search?query=${searchTerm.value}`);
	const { data: searchMovies } = await useFetch(url);
	const { data: movies } = await useFetch('/api/fetchTopRated');
</script>

<template>
	<main class="py-10">
		<div class="flex flex-wrap items-center justify-center gap-10 mb-10 sm:justify-between">
			<h1
				class="text-3xl font-bold text-center underline sm:text-left"
			>
				{{ searchTerm?.length > 0 ? 'Search Results' : 'Top Rated Movies' }}
			</h1>
			<input
				type="text"
				v-model="searchTerm"
				placeholder="Search..."
				class="p-2 text-lg bg-transparent border-b-2 border-slate-400 focus:border-sky-700 focus:outline-none"
			/>
		</div>
		<div
			v-if="searchMovies"
			class="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
		>
			<MovieCard
				v-for="movie in searchMovies?.results"
				:key="movie.id"
				:movie="movie"
			/>
		</div>
		<div
			v-if="!searchTerm"
			class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
		>
			<MovieCard
				v-for="movie in movies?.results"
				:key="movie.id"
				:movie="movie"
			/>
		</div>
	</main>
</template>
