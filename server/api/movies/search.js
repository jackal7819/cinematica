export default defineEventHandler(async (event) => {
	try {
		const { query, page } = getQuery(event);
		const config = useRuntimeConfig();
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: config.apiKey,
			},
		};
		const response = await $fetch(`${config.apiBaseUrl}/search/movie?query=${query}&language=en-US&page=${page}`, options);
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
});