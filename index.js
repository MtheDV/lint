const pluginVue = require("eslint-plugin-vue");
const stylistic = require("@stylistic/eslint-plugin");

module.exports = [
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
