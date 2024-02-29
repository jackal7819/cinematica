// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Cinematica',
			meta: [{ name: 'description', content: 'The movie app' }],
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '/pinia.svg' },
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
					integrity:
						'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
					crossorigin: 'anonymous',
					referrerpolicy: 'no-referrer',
				},
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
					rel: 'stylesheet',
				},
			],
		},
	},
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
	// runtimeConfig: {
	// 	apiKey: process.env.NUXT_API_KEY,
	// 	apiBaseUrl: process.env.NUXT_API_BASE_URL,
	// },
		runtimeConfig: {
		apiKey: '',
		apiBaseUrl: '',
	},
});
