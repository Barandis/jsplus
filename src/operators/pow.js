// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the `**` exponentiation operator.
 *
 * Note that when used with a single argument, that argument is the base (the number that is
 * raised to a power). If you need the argument to be the exponent (the power that the base
 * is raised to), use the `{@link module:combinators.swap|swap}` combinator. See the
 * examples below.
 *
 * ```javascript
 * console.log(2 ** 5)             // 32
 * console.log(pow (2) (5))        // 32
 *
 * const powerOf2 = pow (2)
 * console.log(powerOf2 (5))       // 32
 *
 * console.log(swap (pow) (2) (5)) // 25
 *
 * const square = swap (pow) (2)
 * console.log(square (5))         // 25
 * ```
 *
 * @param {number} x The base.
 * @param {number} y The exponent.
 * @returns {number} The base raised to the power of the exponent.
 * @alias module:operators.pow
 */
function pow(x, y) {
  return x ** y
}

module.exports = curry2(pow)
