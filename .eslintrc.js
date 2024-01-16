module.exports = {
  extends: ['eslint:recommended', require.resolve('fe-base-lint/dist/eslint')],
  rules: {
    '@typescript-eslint/no-use-before-define': 0,
  },
}
