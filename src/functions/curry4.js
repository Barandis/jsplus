// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a four-argument function.
 *
 * Unlike in `{@link module:functions.curry|curry}`, the curried function so produced must
 * take its arguments one at a time. It will not accept multiple arguments within a single
 * set of parentheses. The advantage is that it works with functions that have rest or
 * default parameters.
 *
 * ```javascript
 * const sum = curry4((a, b, c, d) => a + b + c + d)
 *
 * // This is the only possible calling format.
 * console.log(sum(1)(2)(3)(4)) // 10
 *
 * // This will not work. It is the same as sum(1)(3)(4) as the second argument is ignored.
 * console.log(sum(1, 2)(3)(4)) // function curry4(d)
 * // This will not work. It's the same as sum(1)(2)(4) as the third argument is ignored.
 * console.log(sum(1)(2, 3)(4)) // function curry4(d)
 * // This is right out.
 * console.log(sum(1, 2, 3, 4)) // function curry4(b)
 * ```
 *
 * @param {function} fn A function of four arguments.
 * @returns {function} A function that takes its arguments singly in four sets of
 *     parentheses.
 * @alias module:functions.curry4
 */
function curry4(fn) {
  return a => b => c => d => fn(a, b, c, d)
}

module.exports = curry4
