// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `===` equals operator.
 *
 * ```javascript
 * console.log(3 === '3')  // false
 * console.log(eq(3, '3')) // false
 * console.log(eq(3)('3')) // false
 *
 * const eq3 = eq(3)
 * console.log(eq3('3'))   // false
 *
 * console.log(3 === 3)    // true
 * console.log(eq(3, 3))   // true
 * console.log(eq(3)(3))   // true
 * console.log(eq3(3))     // true
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether the two arguments are equal, with equality defined by `===`.
 * @alias module:operators.eq
 */
function eq(x, y) {
  return x === y
}

module.exports = curry(eq)
