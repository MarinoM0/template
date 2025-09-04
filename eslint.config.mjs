import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'], // Make sure all JS files are matched
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': ['error'],
      'no-var': 'error', // triggers error if var is used
      'no-unused-vars': 'warn', // triggers warning if unused variables
    },
    extends: ['js/recommended'],
  },
]);
