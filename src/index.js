// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const combinators = require('./combinators')
const functions = require('./functions')
const operators = require('./operators')

module.exports = { ...combinators, ...functions, ...operators }
