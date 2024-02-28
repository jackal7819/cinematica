<script setup>
	const searchTerm = ref('');
	const searchPage = ref(1);
	const page = ref(1);
	const totalPages = 500;
	const debouncedSearchTerm = refDebounced(searchTerm, 1000);
	const searchUrl = computed(
		() =>
			`api/movies/search?query=${debouncedSearchTerm.value}&page=${searchPage.value}`
	);
	const url = computed(() => `/api/fetchPopular?page=${page.value}`);
	const { data: searchMovies } = await useFetch(searchUrl);
	const { data: movies } = await useFetch(url);
	const disabledPreviousSearch = computed(() => searchPage.value === 1);
	const disabledNextSearch = computed(
		() => searchPage.value + 1 >= searchMovies.value?.total_pages
	);
	const disabledPrevious = computed(() => page.value === 1);
	const disabledNext = computed(() => page.value + 1 >= totalPages);
</script>

<template>
	<main class="py-10">
		<div
			class="flex flex-wrap items-center justify-center gap-10 mb-10 sm:justify-between"
		>
			<h1 class="text-3xl font-bold text-center underline sm:text-left">
				{{
					searchTerm?.length > 0 ? 'Search Results' : 'Popular Movies'
				}}
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
			v-if="searchMovies?.total_pages > 1"
			class="flex justify-center gap-2"
		>
			<button
				v-if="searchPage !== 1"
				@click="searchPage = 1"
				class="hidden px-4 py-2 border rounded-lg border-sky-500 text-m sm:block"
			>
				{{ 1 }}
			</button>
			<button
				v-if="!disabledPreviousSearch"
				@click="searchPage--"
				class="px-4 py-2 border border-green-500 rounded-lg text-m"
			>
				Previous
			</button>
			<div class="px-4 py-2 border border-pink-500 rounded-lg text-m">
				Page {{ searchPage }}
			</div>
			<button
				v-if="!disabledNextSearch"
				@click="searchPage++"
				class="px-4 py-2 border border-green-500 rounded-lg text-m"
			>
				Next
			</button>
			<button
				v-if="searchPage !== searchMovies?.total_pages"
				@click="searchPage = searchMovies?.total_pages"
				class="hidden px-4 py-2 border rounded-lg border-sky-500 text-m sm:block"
			>
				{{ searchMovies?.total_pages }}
			</button>
		</div>
		<div
			v-if="!searchTerm"
			class="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center"
		>
			<MovieCard
				v-for="movie in movies?.results"
				:key="movie.id"
				:movie="movie"
			/>
		</div>
		<div v-if="!searchTerm" class="flex justify-center gap-2">
			<button
				v-if="page !== 1"
				@click="page = 1"
				class="hidden px-4 py-2 border rounded-lg border-sky-500 text-m sm:block"
			>
				{{ 1 }}
			</button>
			<button
				v-if="!disabledPrevious"
				@click="page--"
				class="px-4 py-2 border border-green-500 rounded-lg text-m"
			>
				Previous
			</button>
			<div class="px-4 py-2 border border-pink-500 rounded-lg text-m">
				Page {{ page }}
			</div>
			<button
				v-if="!disabledNext"
				@click="page++"
				class="px-4 py-2 border border-green-500 rounded-lg text-m"
			>
				Next
			</button>
			<button
				v-if="page !== totalPages"
				@click="page = totalPages"
				class="hidden px-4 py-2 border rounded-lg border-sky-500 text-m sm:block"
			>
				{{ totalPages }}
			</button>
		</div>
	</main>
</template>
