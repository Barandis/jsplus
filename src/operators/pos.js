// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * A function version of the unary `+` operator.
 *
 * ```javascript
 * console.log(+'3')      // 3
 * console.log(pos('3'))  // 3
 *
 * console.log(+true)     // 1
 * console.log(pos(true)) // 1
 * ```
 *
 * @param {*} x The value to convert to a number.
 * @returns The number that `x` was converted to, or `NaN` if it could not be converted.
 * @alias module:operators.pos
 */
function pos(x) {
  return +x
}

module.exports = pos
