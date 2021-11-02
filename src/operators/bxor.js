// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `^` operator.
 *
 * ```javascript
 * console.log(114 ^ 75)      // 57
 * console.log(bxor(114, 75)) // 57
 * console.log(bxor(114)(75)) // 57
 *
 * const xor114 = bxor(114)
 * console.log(xor114(75))    // 57
 * ```
 *
 * @param {number} x The first operand.
 * @param {number} y The second operand.
 * @returns {number} The bitwise XOR of `x` and `y`.
 * @alias module:operators.bxor
 */
function bxor(x, y) {
  return x ^ y
}

module.exports = curry(bxor)
