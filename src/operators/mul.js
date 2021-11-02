// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `*` operator.
 *
 * ```javascript
 * console.log(4 * 7)     // 28
 * console.log(mul(4, 7)) // 28
 * console.log(mul(4)(7)) // 28
 *
 * const mul4 = mul(4)
 * console.log(mul4(7))   // 28
 * ```
 *
 * @param {number} x The first operand.
 * @param {number} y The second operand.
 * @returns {number} The product of `x` and `y`.
 * @alias module:operators.mul
 */
function mul(x, y) {
  return x * y
}

module.exports = curry(mul)
