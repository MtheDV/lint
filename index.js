import pluginVue from "eslint-plugin-vue"
import stylistic from '@stylistic/eslint-plugin'
import tseslint from "typescript-eslint"
import vueParser from 'vue-eslint-parser'

export default [
	// Default TS and VUE eslint configs
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/strongly-recommended'],
	{
		// For TS, TSX, and VUE files
		files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: tseslint.parser,
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
		plugins: {
			'@stylistic': stylistic,
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			// Styling rules
			'@stylistic/indent': ['error', 'tab'],
			'vue/html-indent': ['error', 'tab'],
			'@stylistic/eol-last': ['error', 'always'],
			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/object-curly-spacing': ['error', 'always'],
			'@stylistic/semi': ['error', 'never'],

			// TS specific rules
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-unused-vars': ['error', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			}],
		},
	},
	{
		// Additional overrides for pure TS/TSX files
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 'latest',
			},
		},
	},
]
