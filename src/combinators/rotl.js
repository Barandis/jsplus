// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * Rotates a three-parameter function's arguments so that the first parameter is applied
 * last.
 *
 * To rotate the arguments in the other direction, use
 * `{@link module:combinators.rotr|rotr}`.
 *
 * This is an implementation of the **R\*** combinator. It takes its name from Factor's
 * `rot` function; Factor's function to rotate in the opposite direction is `-rot` and we
 * can't use a `-` in a function name in JavaScript, so we use `rotl` and `rotr` instead.
 *
 * `rotl` makes the first argument given into the last argument applied. This is very useful
 * for functions that take their data as their first argument; it can turn them into
 * functions which take their data as their last argument, which is in many cases easier to
 * compose.
 *
 * ```javascript
 * const sub = (x, y, z) => x - y - z
 *
 * const direct = rotl(sub, 1, 5, -2) // direct application
 * const single = rotl(sub, 1, 5)(-2) // create a 1-arg function
 * const double = rotl(sub, 1)(5, -2) // create a 2-arg function
 * const triple = rotl(sub)(1, 5, -2) // create a 3-arg function
 *
 * console.log(direct)  // 6
 * console.log(single)  // 6
 * console.log(double)  // 6
 * console.log(triple)  // 6
 * ```
 *
 * @param {function} fn A function of three arguments.
 * @param {*} x The first argument, which `fn` will apply as its third argument.
 * @param {*} y The second argument, which `fn` will apply as its first argument.
 * @param {*} z The third argument, which `fn` will apply as its second argument.
 * @returns {function} A curried function which expects its arguments in left-rotated order
 *      from `fn` but otherwise behaves the same.
 * @alias module:combinators.rotl
 */
function rotl(fn, x, y, z) {
  return curry(fn)(y)(z)(x)
}

module.exports = curry(rotl)
