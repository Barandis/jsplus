// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the binary `+` addition/concatenation operator.
 *
 * This works with strings as well as with numbers.
 *
 * ```javascript
 * console.log(4 + 7)     // 11
 * console.log(add(4, 7)) // 11
 * console.log(add(4)(7)) // 11
 *
 * const add4 = add(4)
 * console.log(add4(7))   // 11
 * ```
 *
 * @param {number|string} x The first operand.
 * @param {number|string} y The second operand.
 * @returns {number|string} The sum of `x` and `y` (if numbers) or `x` and `y` concatenated
 *      (if strings).
 * @alias module:operators.add
 */
function add(x, y) {
  return x + y
}

module.exports = curry(add)
