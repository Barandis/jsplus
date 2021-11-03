// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Determines whether a value is an array.
 *
 * This function merely delegates to `Array.isArray`. It is provided for consistency in
 * calling style only.
 *
 * @function
 * @param {*} x The value being tested to see if it is an array.
 * @return {boolean} Either `true` if the test value is an array or `false` if it is not.
 * @alias module:utilities.isArray
 */
const { isArray } = Array

module.exports = isArray
