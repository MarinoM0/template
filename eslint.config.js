import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierConfig.rules, // This disables conflicting ESLint formatting rules
      'prettier/prettier': 'error',

      // Only code quality rules (no formatting rules)
      'no-unused-vars': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'camelcase': 'error',
      'no-underscore-dangle': 'error',
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],

      // REMOVED these formatting rules that conflict with Prettier:
      // 'quotes': ['error', 'single'],
      // 'semi': ['error', 'always'],
      // 'indent': ['error', 2],
      // 'comma-dangle': ['error', 'always-multiline'],
      // 'object-curly-spacing': ['error', 'always'],
      // 'array-bracket-spacing': ['error', 'never'],
    },
  },
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', '*.min.js', 'webpack.config.js'],
  },
];
