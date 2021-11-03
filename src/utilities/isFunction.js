// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Determines whether a value is a function.
 *
 * @param {*} x The value being tested to see if it is a function.
 * @return {boolean} Either `true` if the test value is a function or `false` if it is not.
 * @alias module:utilities.isFunction
 */
function isFunction(x) {
  return typeof x === 'function'
}

module.exports = isFunction
