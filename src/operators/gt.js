// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `>` operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `>`. If you need the argument to be the one on the *right* side, you can either
 * swap the arguments and use `{@link module:operators.lt|lt}` or use the
 * `{@link module:combinators.flip|flip}` combinator on `gt`. See the examples below.
 *
 * ```javascript
 * console.log(4 > 3)       // true
 * console.log(gt(4, 3))    // true
 * console.log(gt(4)(3))    // true
 *
 * const gtFrom4 = gt(4)
 * // This is the same as x => 4 > x
 * console.log(gtFrom4(3))  // true
 *
 * // To do x => x > 4, there are two choices
 * const gt4a = flip(gt, 4) // Actual x => x > 4
 * const gt4b = lt(4)       // x => 4 < x is the same thing
 * console.log(gt4a(3))     // false
 * console.log(gt4b(3))     // false
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether `x` is greater than `y`.
 * @alias module:operators.gt
 */
function gt(x, y) {
  return x > y
}

module.exports = curry(gt)
