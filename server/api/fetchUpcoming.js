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
		const response = await fetch(`${config.apiBaseUrl}/movie/upcoming?language=en-US&page=1`, options);
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.error(error);
		return null;
	}
});
