// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a two-argument function.
 *
 * The result will always be a two-argument curried function. Whether or not the actual
 * function takes two arguments, less than two, or more than two doesn't matter. If it takes
 * less, the extra arguments will be ignored; if it takes more, the arguments past the
 * second will all be set to `undefined`. This is normal JavaScript behavior.
 *
 * Unlike `{@link module:functions.curry|curry}`, the curried function will not fail if one
 * of the argument is optional or a rest argument. In fact, currying a function takes away
 * any optional or rest nature of any arguments. The curried function will take exactly two
 * arguments, whatever kind they are.
 *
 * ```javascript
 * const sum = curry2((a, b) => a + b)
 *
 * // This is the only possible calling format.
 * const result = sum (1) (2)
 *
 * // This will not work. It is the same as sum (1) as the 2nd argument is ignored.
 * const partial = sum (1, 2)
 *
 * console.log(result)  // 3
 * console.log(partial) // function curry2(b)
 * ```
 *
 * @param {function} fn A function of two arguments.
 * @returns {function} A curried function of two arguments.
 * @alias module:functions.curry2
 */
function curry2(fn) {
  return a => b => fn(a, b)
}

module.exports = curry2
