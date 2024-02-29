<script setup>
	const route = useRoute();
	const movieId = computed(() => route.params.id);
	const { data: movie } = await useFetch(`/api/movies/${movieId.value}`);
</script>

<template>
	<main
		class="grid grid-cols-1 gap-10 py-10 my-auto lg:grid-cols-2 place-items-center"
	>
		<img
			:src="
				movie?.poster_path !== null
					? `https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`
					: `https://placehold.co/500x281/BAE6FD/94A3B8?text=${movie?.title}`
			"
			class="object-cover rounded-lg h-[281px] w-[500px]"
		/>
		<div class="flex flex-col gap-2">
			<h2 class="text-3xl font-bold text-slate-200">
				{{ movie?.title }}
			</h2>
			<div class="flex flex-wrap gap-3">
				<span
					v-for="genre in movie?.genres"
					:key="genre.id"
					class="px-2 py-1 rounded bg-sky-900"
				>
					{{ genre.name }}
				</span>
			</div>
			<p class="font-bold text-pink-500">
				Release Date:
				<span class="font-normal text-slate-400">{{
					movie?.release_date
				}}</span>
			</p>
			<p class="font-bold text-sky-500">
				Duration:
				<span class="font-normal text-slate-400"
					>{{ movie?.runtime }} min</span
				>
			</p>
			<p class="font-bold text-orange-500">
				Overview:
				<span class="font-normal text-slate-400">{{
					movie?.overview
				}}</span>
			</p>
			<p class="font-bold text-green-500">
				Vote Average:
				<span class="font-normal text-slate-400">{{
					movie?.vote_average
				}}</span>
			</p>
		</div>
	</main>
</template>
