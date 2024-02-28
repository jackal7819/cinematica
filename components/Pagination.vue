<script setup>
	const { movies, page, disabledPrevious, disabledNext, totalPages } = defineProps([
		'movies',
		'page',
		'disabledPrevious',
		'disabledNext',
		'totalPages',
	]);
</script>

<template>
			<div class="flex justify-center gap-2">
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
</template>