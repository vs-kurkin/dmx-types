import tsESLint from '@typescript-eslint/eslint-plugin'

export default [
  {
    extends: tsESLint.configs.recommendedTypeCheckedOnly,
    files: [ './types/*.d.ts' ],

    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
      }
    },
  }
];