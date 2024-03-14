module.exports = {
  extends: ['eslint:recommended', require.resolve('fe-base-lint/dist/eslint')],
  rules: {
    'no-shadow': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
}
