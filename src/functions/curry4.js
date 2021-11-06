// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a four-argument function.
 *
 * The result will always be a four-argument curried function. Whether or not the actual
 * function takes four arguments, less than four, or more than four doesn't matter. If it
 * takes less, the extra arguments will be ignored; if it takes more, the arguments past the
 * second will all be set to `undefined`. This is normal JavaScript behavior.
 *
 * Unlike `{@link module:functions.curry|curry}`, the curried function will not fail if one
 * of the argument is optional or a rest argument. In fact, currying a function takes away
 * any optional or rest nature of any arguments. The curried function will take exactly four
 * arguments, whatever kind they are.
 *
 * ```javascript
 * const sum = curry4((a, b, c, d) => a + b + c + d)
 *
 * // This is the only possible calling format.
 * const result = sum (1) (2) (3) (4)
 *
 * // This will not work. It is the same as sum (1) (3) (4) as the 2nd argument is ignored.
 * const part1 = sum (1, 2) (3) (4)
 * // This will not work. It's the same as sum (1) (2) (4) as the 3rd argument is ignored.
 * const part2 = sum(1) (2, 3) (4)
 * // This is right out.
 * const part3 = sum (1, 2, 3, 4)
 *
 * console.log(result) // 10
 * console.log(part1)  // function curry3(d)
 * console.log(part2)  // function curry3(d)
 * console.log(part3)  // function curry3(b)
 * ```
 *
 * @param {function} fn A function of four arguments.
 * @returns {function} A curried function of four arguments.
 * @alias module:functions.curry4
 */
function curry4(fn) {
  return a => b => c => d => fn(a, b, c, d)
}

module.exports = curry4
