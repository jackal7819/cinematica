export default defineEventHandler(async () => {
	try {
		const config = useRuntimeConfig();
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: config.apiKey,
			},
		};
		const response = await $fetch(`${config.apiBaseUrl}/movie/top_rated?language=en-US&page=1`, options);
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
});