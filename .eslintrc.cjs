module.exports = {
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 12,
		sourceType: 'module',
		project: './tsconfig.json',
		extraFileExtensions: ['.vue'],
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		indent: ['error', 4],
		useTabs: 2,
		tabWidth: 2,
	},
	overrides: [
		{
			files: ['src/**/*.ts', 'src/**/*.vue', 'tests/**/*.ts'],
			rules: {
				indent: ['error', 4],
				useTabs: 2,
				tabWidth: 2,
			},
		},
	],
	ignorePatterns: ['.eslintrc.cjs'],
}
