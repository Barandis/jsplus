// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * Applies a function.
 *
 * This is an implementation of the `{@link module:combinators/pure.Is|I*}` combinator. It
 * basically is just `Function.apply` with `null` as a target and only a single argument.
 *
 * ```javascript
 * const inc = add(1)
 * const result = apply(inc, 4)
 *
 * console.log(result) // 5
 * ```
 *
 * This function is provided primarily for completeness. Even if direct function calls
 * aren't possible, `apply` and `call` do the same thing with additional options.
 *
 * @param {function} f A single-argument function to apply to `x`.
 * @param {*} x The argument to be applied to `f`.
 * @returns {*} The value that `f` returns when applied to `x`.
 * @alias module:combinators.apply
 */
function apply(f, x) {
  return f(x)
}

module.exports = curry2(apply)
