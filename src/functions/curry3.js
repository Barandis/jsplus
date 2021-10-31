// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a three-argument function.
 *
 * Unlike in `{@link module:functions.curry|curry}`, the curried function so produced must
 * take its arguments one at a time. It will not accept multiple arguments within a single
 * set of parentheses. The advantage is that it works with functions that have rest or
 * default parameters.
 *
 * # Examples
 *
 * ```javascript
 * const sum = curry3((a, b, c) => a + b + c)
 *
 * // This is the only possible calling format.
 * console.log(sum(1)(2)(3)) // 6
 *
 * // This will not work. It is the same as sum(1)(3) as the second argument is ignored.
 * console.log(sum(1, 2)(3)) // function curry3(c)
 * // This will also not work. It's the same as sum(1)(2) as the third argument is ignored.
 * console.log(sum(1)(2, 3)) // function curry3(c)
 * // This is right out.
 * console.log(sum(1, 2, 3)) // function curry3(b)
 * ```
 *
 * @param {function} fn A function of three arguments.
 * @returns {function} A function that takes its arguments singly in three sets of
 *     parentheses.
 * @alias module:functions.curry3
 */
function curry3(fn) {
  return a => b => c => fn(a, b, c)
}

module.exports = curry3
