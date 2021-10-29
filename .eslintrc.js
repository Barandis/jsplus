// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const OFF = 0
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
    browser: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    babelOptions: {
      plugins: [
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-class-properties',
      ],
    },
  },
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      },
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    'prettier/prettier': [ERROR],
    'global-require': [OFF],
    'no-bitwise': [OFF],
    'no-multi-str': [OFF],
    'no-nested-ternary': [OFF], // yeah right
    'no-param-reassign': [ERROR, { props: false }],
    'no-restricted-syntax': [OFF],
    'no-return-assign': [ERROR, 'except-parens'],
    'no-underscore-dangle': [OFF],
    'no-unused-vars': [ERROR, { varsIgnorePattern: '^_' }],
    'no-use-before-define': [ERROR, { functions: false }],
  },
}
