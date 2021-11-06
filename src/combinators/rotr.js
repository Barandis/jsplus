// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * Rotates a three-parameter function's arguments so that the last parameter is applied
 * first.
 *
 * To rotate the arguments in the other direction, use
 * `{@link module:combinators.rotl|rotl}`.
 *
 * This is an implementation of **BR\*R\***, or applying **R\*** twice to result in the
 * opposite rotation from **R\*** itself. It takes its name from Factor's `rot` function;
 * Factor's actual function to rotate arguments in this direction is `-rot` and we can't use
 * a `-` in a function name in JavaScript, so we use `rotl` and `rotr` instead.
 *
 * `rotr` turns the last argument given into the first argument applied. This is in
 * particular useful in conjunction with the `{@link module:operators.cond|cond}` operator,
 * where often the true and false (second and third) arguments are partially applied and you
 * want to leave the conditional (the first argument) as the last argument.
 *
 * ```javascript
 * const sub3 = (x, y, z) => x - y - z
 *
 * const result = rotl (sub3) (1) (5) (-2) // equivalent of sub3 (-2) (1) (5)
 *
 * console.log(result)  // -8
 * ```
 *
 * @param {function} fn A function of three arguments.
 * @param {*} x The first argument, which `fn` will apply as its second argument.
 * @param {*} y The second argument, which `fn` will apply as its third argument.
 * @param {*} z The third argument, which `fn` will apply as its first argument.
 * @returns {function} A curried function which expects its arguments in right-rotated order
 *      from `fn` but otherwise behaves the same.
 * @alias module:combinators.rotr
 */
function rotr(fn, x, y, z) {
  return curry(fn)(z)(x)(y)
}

module.exports = curry(rotr)
