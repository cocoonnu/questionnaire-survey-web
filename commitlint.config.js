module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['upd', 'feat', 'fix', 'refactor', 'docs', 'chore', 'style', 'revert'],
    ],
  },
};
