// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `|` bitwise or operator.
 *
 * ```javascript
 * console.log(114 | 75)       // 123
 * console.log(bor (114) (75)) // 123
 *
 * const or114 = bor (114)
 * console.log(or114 (75))     // 123
 * ```
 *
 * @param {number} x The first operand.
 * @param {number} y The second operand.
 * @returns {number} The bitwise OR of `x` and `y`.
 * @alias module:operators.bor
 */
function bor(x, y) {
  return x | y
}

module.exports = curry(bor)
