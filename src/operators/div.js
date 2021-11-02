// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `/` operator.
 *
 * Note that when used with a single argument, that argument is the dividend (the number
 * that gets divided). If you need the argument to be the divisor (the number by which the
 * dividend is divided), use the `{@link module:combinators.flip|flip}` combinator. See the
 * examples below.
 *
 * ```javascript
 * console.log(4 / 7)           // 0.5714285714285714
 * console.log(div(4, 7))       // 0.5714285714285714
 * console.log(div(4)(7))       // 0.5714285714285714
 *
 * const div4 = div(4)
 * console.log(div4(7))         // 0.5714285714285714
 *
 * console.log(flip(div)(4, 7)) // 1.75
 * console.log(flip(div)(4)(7)) // 1.75
 *
 * const dividedBy4 = flip(div, 4)
 * console.log(dividedBy4(7))   // 1.75
 * ```
 *
 * @param {number} x The dividend.
 * @param {number} y The divisor.
 * @returns {number} The quotient of `x` and `y`.
 * @alias module:operators.div
 */
function div(x, y) {
  return x / y
}

module.exports = curry(div)
