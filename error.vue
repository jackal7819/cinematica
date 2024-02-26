<script setup>
	defineProps(['error']);

	const handleClearError = () => clearError({ redirect: '/' });
</script>

<template>
	<main
		class="grid min-h-screen text-slate-400 bg-slate-900 place-items-center p-[5%]"
	>
		<div
			class="shadow-lg shadow-sky-500 p-[5%] rounded-lg flex flex-col gap-5 text-center"
		>
			<h1 class="font-bold text-7xl">{{ error.statusCode }}</h1>
			<h2 class="text-3xl">Oops! It seems you've hit a dead end</h2>
			<p class="text-xl">{{ error.message }}</p>
			<button
				@click="handleClearError"
				class="py-2 mx-auto text-center duration-300 rounded w-52 bg-sky-700 text-slate-200 active:bg-sky-500 hover:bg-sky-600"
			>
				Go Home
			</button>
		</div>
	</main>
</template>
