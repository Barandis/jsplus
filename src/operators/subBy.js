// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the binary `-` subtraction operator, but in reverse order.
 *
 * This is the same function as `{@link module:operators.sub|sub}` except that the arguments
 * are reversed. The motivation is that subtraction isn't commutative, and it's extremely
 * common to subtract an unknown number by a known number. A function to decrement an
 * argument would look like this with `sub`:
 * ```javascript
 * const dec = swap (sub) (1)
 * ```
 * while with `subBy` it would instead be:
 * ```javascript
 * const dec = subBy (1)
 * ```
 * Thus `subBy` allows common functions to be written without the extra complexity of adding
 * `{@link module:combinators.swap|swap}`.
 *
 * @param {number} x The subtrahend.
 * @param {number} y The minuend.
 * @returns {number} The difference of `y` and `x`.
 * @alias module:operators.subBy
 */
function subBy(x, y) {
  return y - x
}

module.exports = curry2(subBy)
