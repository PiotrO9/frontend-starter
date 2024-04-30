export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['./assets/styles/global.scss'],
	modules: ['@nuxt/eslint'],
	typescript: {
		typeCheck: true,
	},
	plugins: ['~/plugins/pinia.js'],
})
