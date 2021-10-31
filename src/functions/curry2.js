// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a two-argument function.
 *
 * Unlike in `{@link module:functions.curry|curry}`, the curried function so produced must
 * take its arguments one at a time. It will not accept multiple arguments within a single
 * set of parentheses. The advantage is that it works with functions that have rest or
 * default parameters.
 *
 * # Examples
 *
 * ```javascript
 * const sum = curry2((a, b) => a + b)
 *
 * // This is the only possible calling format.
 * console.log(sum(1)(2)) // 3
 *
 * // This will not work. It is the same as sum(1) as the second argument is ignored.
 * console.log(sum(1, 2)) // function curry2(b)
 * ```
 *
 * @param {function} fn A function of two arguments.
 * @returns {function} A function that takes its arguments singly in two sets of
 *     parentheses.
 * @alias module:functions.curry2
 */
function curry2(fn) {
  return a => b => fn(a, b)
}

module.exports = curry2
