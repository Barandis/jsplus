// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Converts a value into a boolean.
 *
 * This uses the same logic as "truthiness" in JavaScript. In other words, if a value is
 * `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, or `NaN`, it is converted to
 * `false`. Every other value is converted to `true`.
 *
 * ```javascript
 * console.log(boolean (0))     // false
 * console.log(boolean (''))    // false
 * console.log(boolean (null))  // false
 *
 * console.log(boolean (14))    // true
 * console.log(boolean ('test)) // true
 * console.log(boolean ([]))    // true
 * ```
 *
 * @param {*} x The value to be converted.
 * @returns {boolean} Either `true` if the value is truthy, or `false` if it is not.
 * @alias module:primitives.boolean
 */
function boolean(x) {
  return Boolean(x)
}

module.exports = boolean
