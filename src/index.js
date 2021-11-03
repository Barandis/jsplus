// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const combinators = require('./combinators')
const functions = require('./functions')
const iterators = require('./iterators')
const operators = require('./operators')
const primitives = require('./primitives')
const utilities = require('./utilities')

module.exports = {
  ...combinators,
  ...functions,
  ...iterators,
  ...operators,
  ...primitives,
  ...utilities,
}
