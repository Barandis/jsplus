// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * A function version of the `!` logical not operator.
 *
 * ```javascript
 * console.log(!0)         // true
 * console.log(lnot(0))    // true
 *
 * console.log(!true)      // false
 * console.log(lnot(true)) // false
 * ```
 *
 * @param {number} x The operand.
 * @returns {number} The logical NOT of `x`. It will return `true` if the argument evaluates
 *      to `false` and `false` otherwise.
 * @alias module:operators.lnot
 */
function lnot(x) {
  return !x
}

module.exports = lnot
