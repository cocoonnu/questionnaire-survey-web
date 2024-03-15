module.exports = {
  extends: ['eslint:recommended', require.resolve('fe-base-lint/dist/eslint')],
  rules: {
    'no-shadow': 0, // 取消变量名重复报错
    '@typescript-eslint/no-shadow': 0, // 取消变量名重复报错
    'react-hooks/exhaustive-deps': 0, // 取消useEffect依赖数组警告
    '@typescript-eslint/no-use-before-define': 0, // 取消变量还未使用警告
  },
}
