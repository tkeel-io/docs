module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-standard-scss',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'color-named': ['never', { ignore: ['inside-function'] }],
    'selector-list-comma-space-after': 'always-single-line',
    'no-unknown-animations': true,
    'selector-class-pattern': null,
  },
  /*overrides: [
    {
      files: ['**!/!*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
  ],*/
};
