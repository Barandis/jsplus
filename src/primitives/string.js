// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Converts a value to a string.
 *
 * This function is a thin wrapper over a `toString` call on the value and thus will return
 * whatever a regular `toString` call woudl return. Note that this may or may not make a lot
 * of sense, depending on what kind of value it is and whether the `toString` method has
 * been overridden to make a more sensible string.
 *
 * ```javascript
 * console.log(string (1729))   // '1729'
 * console.log(string (23n))    // '23'
 * console.log(string (true))   // 'true'
 * console.log(string ([]))     // ''
 * console.log(string ([14]))   // '14'
 * console.log(string ({}))     // '[object Object]'
 * console.log(string (null))   // 'null'
 * console.log(string ())       // 'undefined'
 * ```
 *
 * @param {*} x The value to be converted.
 * @returns {string} A string representation of the value.
 * @alias module:primitives.string
 */
function string(x) {
  if (x === null) {
    return 'null'
  }
  if (x === undefined) {
    return 'undefined'
  }
  return x.toString()
}

module.exports = string
