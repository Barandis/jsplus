// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `!==` not equals operator.
 *
 * ```javascript
 * console.log(3 !== '3')    // true
 * console.log(ne (3) ('3')) // true
 *
 * const ne3 = ne (3)
 * console.log(ne3 ('3'))    // true
 *
 * console.log(3 !== 3)      // false
 * console.log(ne (3) (3))   // false
 * console.log(ne3 (3))      // false
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether the two arguments are unequal, with equality defined by `===`.
 * @alias module:operators.ne
 */
function ne(x, y) {
  return x !== y
}

module.exports = curry(ne)
