// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * A function version of the `~` operator.
 *
 * ```javascript
 * console.log(~114)      // -115
 * console.log(bnot(114)) // -115
 * ```
 *
 * @param {number} x The operand.
 * @returns {number} The bitwise NOT of `x`.
 * @alias module:operators.bnot
 */
function bnot(x) {
  return ~x
}

module.exports = bnot
