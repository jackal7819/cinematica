<script setup>
		const { id } = useRoute().params;
</script>

<template>
	<main class="py-10">
		<h1 class="text-3xl font-bold underline">
			Movie {{ id }}
		</h1>
	</main>
</template>
