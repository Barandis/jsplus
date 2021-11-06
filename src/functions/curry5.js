// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a five-argument function.
 *
 * The result will always be a five-argument curried function. Whether or not the actual
 * function takes five arguments, less than five, or more than five doesn't matter. If it
 * takes less, the extra arguments will be ignored; if it takes more, the arguments past the
 * second will all be set to `undefined`. This is normal JavaScript behavior.
 *
 * Unlike `{@link module:functions.curry|curry}`, the curried function will not fail if one
 * of the argument is optional or a rest argument. In fact, currying a function takes away
 * any optional or rest nature of any arguments. The curried function will take exactly five
 * arguments, whatever kind they are.
 *
 * ```javascript
 * const sum = curry5((a, b, c, d, e) => a + b + c + d + e)
 *
 * // This is the only possible calling format.
 * const result = sum (1) (2) (3) (4) (5)
 *
 * // This is the same as sum(1)(3)(4)(5) as the 2nd argument is ignored.
 * const part1 = sum (1, 2) (3) (4) (5)
 * // This is the same as sum (1) (2) (4) (5) as the 3rd argument is ignored.
 * const part2 = sum (1) (2, 3) (4) (5)
 * // This is right out.
 * const part3 = sum (1, 2, 3, 4, 5)
 *
 * console.log(result) // 15
 * console.log(part1)  // function curry3(e)
 * console.log(part2)  // function curry3(e)
 * console.log(part3)  // function curry3(b)
 * ```
 *
 * @param {function} fn A function of five arguments.
 * @returns {function} A curried function of five arguments.
 * @alias module:functions.curry5
 */
function curry5(fn) {
  return a => b => c => d => e => fn(a, b, c, d, e)
}

module.exports = curry5
