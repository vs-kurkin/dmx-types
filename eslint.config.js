import tsESLint from '@typescript-eslint/eslint-plugin'

export default [
  {
    extends: [
      tsESLint.configs.recommendedTypeCheckedOnly,
      tsESLint.configs.stylecticTypeCheckedOnly,
    ],

    files: [ './types/*.d.ts' ],

    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: true,
      },
    },
  },
]
