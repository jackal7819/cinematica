export default defineEventHandler(async (event) => {
	try {
		// const { id } = getQuery(event);
		const id = [...event.node.req.url.split('/')].pop();
		const config = useRuntimeConfig();
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: config.apiKey,
			},
		};
		const response = await $fetch(
			`${config.apiBaseUrl}/movie/${id}?language=en-US`,
			options
		);
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
});
