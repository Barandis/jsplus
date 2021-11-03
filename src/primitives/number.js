// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Converts a value into a number.
 *
 * Any type can be passed to this function, but if it doesn't convert cleanly into a number,
 * this function will return `NaN`. `null` will convert to `0`, but `undefined` will convert
 * to `NaN`. Booleans will convert to `1` or `0`.
 *
 * Objects will convert to `NaN`, but arrays will convert to `0` of they're empty or th
 * number represented by their element if they have exactly one element (this may still be
 * `NaN`). Arrays with more than 1 element convert to `NaN`.
 *
 * Strings that parse into numbers and bigints will convert to numbers just fine, but if
 * they're larger than `Number.MAX_SAFE_INTEGER`, some precision will be lost. Strings that
 * represent numbers in scientific (exponential) notation convert fine. Strings that do not
 * parse into numbers will return `NaN`.
 *
 * Only symbols cannot be converted to numbers at all. Trying to do so will throw a
 * `TypeError`.
 *
 * ```javascript
 * console.log(number('1729')) // 1729
 * console.log(number(23n))    // 23
 * console.log(number(true))   // 1
 * console.log(number([]))     // 0
 * console.log(number(['14'])) // 14
 * console.log(number({}))     // NaN
 * console.log(number(null))   // 0
 * console.log(number())       // NaN
 * ```
 *
 * @param {*} x The value to be converted.
 * @returns {number} The value as a number, or `NaN` if the value cannot be translated into
 *      a number.
 * @throws {TypeError} If the value is a symbol.
 * @alias module:primitives.number
 */
function number(x) {
  return Number(x)
}

module.exports = number
