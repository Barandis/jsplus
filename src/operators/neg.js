// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * A function version of the unary `-` operator.
 *
 * ```javascript
 * console.log(-4)     // -4
 * console.log(neg(4)) // -4
 * ```
 *
 * @param {number} x The number to negate.
 * @returns The negated number.
 * @alias module:operators.neg
 */
function neg(x) {
  return -x
}

module.exports = neg
