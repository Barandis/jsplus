// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the `<=` less than or equals operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `<=`. If you need the argument to be the one on the *right* side, you can either
 * swap the arguments and use `{@link module:operators.ge|ge}` or use the
 * `{@link module:combinators.swap|swap}` combinator on `le`. See the examples below.
 *
 * ```javascript
 * console.log(3 <= 4)        // true
 * console.log(le (3) (4))    // true
 *
 * const leFrom3 = le(3)
 * // This is the same as x => 3 <= x
 * console.log(leFrom3 (4))   // true
 *
 * // To do x => x <= 3, there are two choices
 * const le3a = swap (le) (3) // Actual x => x <= 3
 * const le3b = ge (3)        // x => 3 >= x is the same thing
 * console.log(le3a (4))      // false
 * console.log(le3b (4))      // false
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether `x` is less than or equal to `y`.
 * @alias module:operators.le
 */
function le(x, y) {
  return x <= y
}

module.exports = curry2(le)
