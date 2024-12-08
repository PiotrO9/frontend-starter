export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxtjs/color-mode',
		'@nuxt/icon',
		'@nuxtjs/tailwindcss',
	],

	plugins: ['~/plugins/pinia.js'],
	devtools: { enabled: true },
	css: ['./assets/styles/app.css'],

	typescript: {
		typeCheck: true,
	},

	eslint: {
		checker: true,
		config: {
			stylistic: true,
		},
	},
});
