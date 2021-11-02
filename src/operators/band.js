// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `&` operator.
 *
 * ```javascript
 * console.log(114 & 75)      // 66
 * console.log(band(114, 75)) // 66
 * console.log(band(114)(75)) // 66
 *
 * const and114 = band(114)
 * console.log(and114(75))    // 66
 * ```
 *
 * @param {number} x The first operand.
 * @param {number} y The second operand.
 * @returns {number} The bitwise AND of `x` and `y`.
 * @alias module:operators.band
 */
function band(x, y) {
  return x & y
}

module.exports = curry(band)
