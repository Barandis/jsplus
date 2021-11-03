// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Determines whether a value is a string.
 *
 * This function will return `true` for both literal strings and strings created as
 * instances of the `String` object.
 *
 * Note that while this will return `true` for strings created using `String(x)`, it will
 * return `false` for objects created with `new String(x)`. The latter are not considered
 * strings, and `typeof` will return `"object"` for them rather than `"string"`.
 *
 * @param {*} x The value to be tested to see if it is a string.
 * @returns {boolean} Either `true` if the value is a string or `false` if it is not.
 * @alias module:utilities.isString
 */
function isString(x) {
  return typeof x === 'string'
}

module.exports = isString
