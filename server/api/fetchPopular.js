export default defineEventHandler(async (event) => {
	try {
		const { page } = getQuery(event);
		const config = useRuntimeConfig();
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: config.apiKey,
			},
		};
		const response = await $fetch(
			`${config.apiBaseUrl}/movie/popular?language=en-US&page=${page}`,
			options
		);
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
});
