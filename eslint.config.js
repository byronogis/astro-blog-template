import antfu from '@antfu/eslint-config'
import astroParser from 'astro-eslint-parser'
import astro from 'eslint-plugin-astro'

export default antfu(
  {},
  {
    files: ['**/*.astro'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        Astro: 'readonly',
      },
      parser: astroParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    plugins: { astro },
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-deprecated-astro-canonicalurl': 'error',
      'astro/no-deprecated-astro-fetchcontent': 'error',
      'astro/no-deprecated-astro-resolve': 'error',
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/valid-compile': 'error',
      'astro/no-set-html-directive': 'error',
      'astro/no-set-text-directive': 'error',
      'astro/no-unused-css-selector': 'error',
      'astro/prefer-class-list-directive': 'error',
      'astro/prefer-object-class-list': 'error',
      'astro/prefer-split-class-list': 'error',
      'semi': 'off',
      'astro/semi': ['error', 'never'],
      'style/no-tabs': 'off',
    },
  },
  {
    files: ['**/*.astro/*.js'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      rules: {},
    },
  },
  {
    rules: {
      curly: 'off',
    },
  },
)
