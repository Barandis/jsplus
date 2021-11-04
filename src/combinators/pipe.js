// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * Composes two functions in left-to-right order.
 *
 * This is the same as `{@link module:combinators.compose|compose}` except for the
 * left-to-right order replacing `compose`'s right-to-left order. That makes it an
 * implementation of the **{@link module:combinators/pure.Q|Q} combinator, or alternately,
 * the same as `swap(compose)`.
 *
 * This is then similar to Clojure's `->>` threading macro.
 *
 * ```
 * // Same as example in `compose`, for contrast
 * // Turns the digits in an array into strings and then concatenates them
 * const stringify = pipe(map(string), reduce(add))
 * const result = stringify([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
 * console.log(result)   // "31415926535"
 * ```
 *
 * @param {function} f The first function executed, applied to `x`. Its result becomes the
 *      argument to `g`.
 * @param {function} g The second function executed, applied to the result of `f`'s
 *      application of `x`. The result of this function will be `compose`'s return value.
 * @returns Function `g`'s result when applied to the result of `f` being applied to `x`.
 * @alias module:combinators.pipe
 */
function pipe(f, g, x) {
  return g(f(x))
}

module.exports = curry(pipe)
