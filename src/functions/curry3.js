// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a three-argument function.
 *
 * The result will always be a three-argument curried function. Whether or not the actual
 * function takes three arguments, less than three, or more than three doesn't matter. If it
 * takes less, the extra arguments will be ignored; if it takes more, the arguments past the
 * second will all be set to `undefined`. This is normal JavaScript behavior.
 *
 * Unlike `{@link module:functions.curry|curry}`, the curried function will not fail if one
 * of the argument is optional or a rest argument. In fact, currying a function takes away
 * any optional or rest nature of any arguments. The curried function will take exactly
 * three arguments, whatever kind they are.
 *
 * ```javascript
 * const sum = curry3((a, b, c) => a + b + c)
 *
 * // This is the only possible calling format.
 * const result = sum (1) (2) (3)
 *
 * // This will not work. It is the same as sum (1) (3) as the 2nd argument is ignored.
 * const part1 = sum (1, 2) (3)
 * // This will also not work. It's the same as sum (1) (2) as the 3rd argument is ignored.
 * const part2 = sum (1) (2, 3)
 * // This is right out.
 * const part3 = sum (1, 2, 3)
 *
 * console.log(result) // 6
 * console.log(part1)  // function curry3(c)
 * console.log(part2)  // function curry3(c)
 * console.log(part3)  // function curry3(b)
 * ```
 *
 * @param {function} fn A function of three arguments.
 * @returns {function} A curried function of three arguments.
 * @alias module:functions.curry3
 */
function curry3(fn) {
  return a => b => c => fn(a, b, c)
}

module.exports = curry3
