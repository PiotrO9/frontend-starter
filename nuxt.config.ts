export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['./assets/styles/global.css'],
	modules: ['@nuxt/eslint'],
	typescript: {
		typeCheck: true,
	},
	plugins: ['~/plugins/pinia.js'],
})
