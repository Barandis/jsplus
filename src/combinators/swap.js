// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * Flips the order of the arguments on a two-argument function.
 *
 * This is an implementation of the **{@link module:combinators/pure.C|C}** combinator that
 * dispenses with the requirement that its function argument is a curried function. `swap`
 * will work with both. The result, either way, is a curried function with the argument
 * order reversed.
 *
 * `swap` itself comes pre-curried so it's easy to generate a unary function out of a binary
 * function with its *second* argument applied instead of its first.
 *
 * This function is called `flip` in Haskell, but `swap` is the name of the same function in
 * Factor. Since many of the other argument-shuffing functions also come from Factor, I have
 * retained that here.
 *
 * ```javascript
 * const sub = (x, y) => x - y
 *
 * const direct = swap(sub, 1, 5)  // evaluate directly
 * const single = swap(sub, 1)(5)  // create a 1-arg function
 * const double = swap(sub)(1, 5)  // create a 2-arg function
 *
 * console.log(direct)  // 4
 * console.log(single)  // 4
 * console.log(double)  // 4
 * ```
 *
 * @param {function} fn A function of two arguments.
 * @param {*} x The first argument, which `fn` will apply as its second argument.
 * @param {*} y The second argument, which `fn` will apply as its first argument.
 * @returns {function} A curried function which expects its arguments in reverse order from
 *      `fn` but otherwise behaves the same.
 * @alias module:combinators.swap
 */
function swap(fn, x, y) {
  return curry(fn)(y)(x)
}

module.exports = curry(swap)
