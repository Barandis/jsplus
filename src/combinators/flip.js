// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * Flips the order of the arguments on a two-argument function.
 *
 * This is an implementation of the **{@link module:combinators/pure.C|C}** combinator that
 * dispenses with the requirement that its function argument is a curried function. `flip`
 * will work with both. The result, either way, is a curried function with the argument
 * order reversed.
 *
 * `flip` itself comes pre-curried so it's easy to generate a unary function out of a binary
 * function with its *second* argument applied instead of its first.
 *
 * ```javascript
 * const sub = (x, y) => x - y
 *
 * // These are all equivalent and all print 4 to the console
 * console.log(flip(sub, 1, 5)) // evaluate directly
 * console.log(flip(sub, 1)(5)) // produce 1-argument function
 * console.log(flip(sub)(1, 5)) // produce 2-argument function
 * ```
 *
 * @param {function} fn A function of two arguments.
 * @param {*} x The first argument, which `fn` will apply as its second argument.
 * @param {*} y The second argument, which `fn` will apply as its first argument.
 * @returns {function} A curried function which expects its arguments in reverse order from
 *      `fn` but otherwise behaves the same.
 * @alias module:combinators.flip
 */
function flip(fn, x, y) {
  return curry(fn)(y)(x)
}

module.exports = curry(flip)
