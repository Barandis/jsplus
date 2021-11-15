// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the `/` division operator, but in reverse order.
 *
 * This is the same function as `{@link module:operators.div|div}` except that the arguments
 * are reversed. The motivation is that division isn't commutative, and it's extremely
 * common to divide an unknown number by a known number. A function to halve an argument
 * would look like this with `div`:
 * ```javascript
 * const halve = swap (div) (2)
 * ```
 * while with `divBy` it would instead be:
 * ```javascript
 * const halve = divBy (2)
 * ```
 * Thus `divBy` allows common functions to be written without the extra complexity of adding
 * `{@link module:combinators.swap|swap}`.
 *
 * @param {number} x The divisor.
 * @param {number} y The dividend.
 * @returns {number} The quotient of `y` and `x`.
 * @alias module:operators.divBy
 */
function divBy(x, y) {
  return y / x
}

module.exports = curry2(divBy)
