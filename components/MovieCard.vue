<script setup>
	const { movie } = defineProps(['movie']);
</script>

<template>
	<div>
		<NuxtLink :to="`/movies/${movie?.id}`">
			<img
				:src="
					movie?.poster_path !== null
						? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
						: `https://placehold.co/300x450/BAE6FD/94A3B8?text=${movie?.title}`
				"
				class="object-cover duration-300 rounded-lg shadow-md h-[450px] shadow-sky-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500 w-[300px]"
			/>
		</NuxtLink>
	</div>
</template>
