// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
/**
 * Composes two functions.
 *
 * This is a direct implementation of the **{@link module:combinators/pure.B|B}**
 * combinator, composing two single-argument functions.
 *
 * Composition is perhaps the most basic operation of functional programming (after function
 * application). It is widely used in many, many languages. Its Haskell equivalent is `.`,
 * its APL equivalent is `∘` (which is the mathematical symbol for composition), and
 * stack-based languages make composition so basic as to do it by literally putting two
 * functions next to each other in the code.
 *
 * Composing traditionally happens in right-to-left order (function `g` will be applied to
 * value `x`, and then function `f` is applied to that result). For left-to-right order, use
 * `{@link module:combinators.pipe|pipe}` instead.
 *
 * ```javascript
 * // Turns the digits in an array into strings and then concatenates them
 * const stringify = compose (reduce (add)) (map (string))
 * const result = stringify ([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
 * console.log(result)   // "31415926535"
 * ```
 *
 * @param {function} f The second function executed, applied to the result of `g`'s
 *      application of `x`. The result of this function will be `compose`'s return value.
 * @param {function} g The first function executed, applied to `x`. Its result becomes the
 *      argument to `f`.
 * @returns Function `f`'s result when applied to the result of `g` being applied to `x`.
 * @alias module:combinators.compose
 */
function compose(f, g, x) {
  return f(g(x))
}

module.exports = curry(compose)
