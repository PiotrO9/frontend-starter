import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		useTabs: 1,
		indent: ['error', 'tab'],
	},
})
