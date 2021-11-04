// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a five-argument function.
 *
 * Unlike in `{@link module:functions.curry|curry}`, the curried function so produced must
 * take its arguments one at a time. It will not accept multiple arguments within a single
 * set of parentheses. The advantage is that it works with functions that have rest or
 * default parameters.
 *
 * ```javascript
 * const sum = curry4((a, b, c, d, e) => a + b + c + d + e)
 *
 * // This is the only possible calling format.
 * const result = sum(1)(2)(3)(4)(5))
 *
 * // This is the same as sum(1)(3)(4)(5) as the second argument is ignored.
 * const part1 = sum(1, 2)(3)(4)(5)
 * // This is the same as sum(1)(2)(4)(5) as the third argument is ignored.
 * const part2 = sum(1)(2, 3)(4)(5)
 * // This is right out.
 * const part3 = sum(1, 2, 3, 4, 5))
 *
 * console.log(result) // 15
 * console.log(part1)  // function curry3(e)
 * console.log(part2)  // function curry3(e)
 * console.log(part3)  // function curry3(b)
 * ```
 *
 * @param {function} fn A function of five arguments.
 * @returns {function} A function that takes its arguments singly in five sets of
 *     parentheses.
 * @alias module:functions.curry5
 */
function curry5(fn) {
  return a => b => c => d => e => fn(a, b, c, d, e)
}

module.exports = curry5
