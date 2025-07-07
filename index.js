import pluginVue from "eslint-plugin-vue"
import stylistic from '@stylistic/eslint-plugin'
import css from '@eslint/css'

export default [
	{
		files: ["**/*.css"],
		language: "css/css",
		plugins: { css },
		extends: ["css/recommended"],
	},
	...pluginVue.configs['flat/strongly-recommended'],
	{
		rules: {
			'@stylistic/indent': ['error', 'tab'],
			'vue/html-indent': ['error', 'tab'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/semi': ['error', 'never'],
		},
		plugins: {
			'@stylistic': stylistic,
		},
		languageOptions: {
			sourceType: 'module',
		},
	},
]
