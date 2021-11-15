// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the `%` remainder operator, but in reverse order.
 *
 * This is the same function as `{@link module:operators.rem|rem}` except that the arguments
 * are reversed. The motivation is that division isn't commutative, and it's extremely
 * common to want the remainder of an unknown number divided by a known number. A function
 * to see if an argument is even would look like this with `rem`:
 * ```javascript
 * const even = eq (0) (swap (rem) (2))
 * ```
 * while with `remBy` it would instead be:
 * ```javascript
 * const even = eq (0) (remBy (2))
 * ```
 * Thus `remBy` allows common functions to be written without the extra complexity of adding
 * `{@link module:combinators.swap|swap}`.
 *
 * @param {number} x The divisor.
 * @param {number} y The dividend.
 * @returns {number} The remainder left when `y` is divided by `x`.
 * @alias module:operators.remBy
 */
function remBy(x, y) {
  return y % x
}

module.exports = curry2(remBy)
