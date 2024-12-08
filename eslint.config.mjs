import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
	features: {
		stylistic: {
			semi: true,
			indent: 'tab',
			quotes: 'single',
		},
	},
	env: {
		cypress: true,
	},
	rules: {
		'operator-linebreak': 'before',
	},
})
	.override('nuxt/typescript/rules', {
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/prefer-literal-enum-member': 'off',
			'@typescript-eslint/no-dynamic-delete': 'off',
		},
	})
	.override('nuxt/stylistic', {
		rules: {
			'@stylistic/operator-linebreak': 'off',
			'@stylistic/brace-style': 'off',
			'@stylistic/semi': 'error',
			'@stylistic/member-delimiter-style': 'error',
			'@stylistic/indent': ['off', 'tab'],
			'@stylistic/arrow-parens': 'off',
		},
	})
	.override('nuxt/vue/rules', {
		rules: {
			'vue/no-multiple-template-root': 'warn',
			'vue/multi-word-component-names': 'off',
			'vue/no-side-effects-in-computed-properties': 'off',
			'vue/no-v-html': 'off',
			'vue/html-self-closing': 'off',
			'vue/max-attributes-per-line': [
				'error',
				{
					singleline: 5,
					multiline: 1,
				},
			],
		},
	});
