// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `>=` operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `>=`. If you need the argument to be the one on the *right* side, you can either
 * swap the arguments and use `{@link module:operators.le|le}` or use the
 * `{@link module:combinators.swap|swap}` combinator on `ge`. See the examples below.
 *
 * ```javascript
 * console.log(4 >= 3)      // true
 * console.log(ge(4, 3))    // true
 * console.log(ge(4)(3))    // true
 *
 * const geFrom4 = ge(4)
 * // This is the same as x => 4 >= x
 * console.log(geFrom4(3))  // true
 *
 * // To do x => x >= 4, there are two choices
 * const ge4a = swap(ge, 4) // Actual x => x >= 4
 * const ge4b = le(4)       // x => 4 <= x is the same thing
 * console.log(ge4a(3))     // false
 * console.log(ge4b(3))     // false
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether `x` is greater than or equal to `y`.
 * @alias module:operators.ge
 */
function ge(x, y) {
  return x >= y
}

module.exports = curry(ge)
