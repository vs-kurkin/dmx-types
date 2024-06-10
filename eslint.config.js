import tsESLint from '@typescript-eslint/eslint-plugin'

export default [
  {
    files: [ './types/*.d.ts' ],
    extends: tsESLint.configs.recommendedTypeCheckedOnly,
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
      },
    },
  },
];
