export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['./assets/styles/global.css'],
	modules: ['@nuxt/eslint', '@nuxtjs/color-mode'],
	typescript: {
		typeCheck: true,
	},
	plugins: ['~/plugins/pinia.js'],
	eslint: {
		checker: true,
		config: {
			stylistic: true,
		},
	},
})
