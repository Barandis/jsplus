// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    library: 'jsplus',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    alias: {
      combinators: path.resolve(__dirname, 'src/combinators'),
      functions: path.resolve(__dirname, 'src/functions'),
      iterators: path.resolve(__dirname, 'src/iterators'),
      operators: path.resolve(__dirname, 'src/operators'),
      primitives: path.resolve(__dirname, 'src/primitives'),
      utilities: path.resolve(__dirname, 'src/utilities'),
      test: path.resolve(__dirname, 'test'),
    },
  },
}
