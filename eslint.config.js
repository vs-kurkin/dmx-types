import tsESLint from 'typescript-eslint'

export default tsESLint.config(
  {
    extends: tsESLint.configs.recommendedTypeCheckedOnly,

    files: [ './types/*.d.ts' ],

    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json'
      }
    },

    rules: {
    }
  }
);