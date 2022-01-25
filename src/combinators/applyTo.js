// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * Applies a function to an argument in reverse order.
 *
 * This is an implementation of the **{@link module:combinators/pure.T|T}** combinator. This
 * is one of the rare combinators that's at least sometimes referred to by its bird name; in
 * this case, `thrush` is a function that can be found in Scheme and also in some Haskell
 * libraries.
 *
 * ```javascript
 * const inc = add(1)
 * const result = applyTo(4, inc)
 *
 * console.log(result) // 5
 * ```
 *
 * @param {*} x The argument to be applied to `f`.
 * @param {function} f A single-argument function to apply to `x`.
 * @returns {*} The value that `f` returns when applied to `x`.
 * @alias module:combinators.applyTo
 */
function applyTo(x, f) {
  return f(x)
}

module.exports = curry2(applyTo)
