// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The identity function. This simply returns the argument given to it.
 *
 * That makes it an implementation (trival as it is) of the
 * **{@link module:combinators/pure.I|I}** combinator. It's most often used for contexts
 * where you need to use a function but you instead have a value. `identity` is a function,
 * but it gives you that value.
 *
 * ```javascript
 * // Here's a reasonable example: a palindrome detector. In this case we want to see if a
 * // value is equal to its reverse.
 *
 * // converge passes the results of its second and third functions to its first function.
 * // Since we want to pass the original string as one of the arguments to eq, but converge
 * // requires a function instead of a simple value, we use identity as a function that
 * // provides that value.
 *
 * const isPalindrome = converge(eq, identity, compose(reduce(add), reverse))
 * ```
 *
 * @param {*} x The value to be returned.
 * @returns {*} The argument `x`.
 * @alias module:combinators.identity
 */
function identity(x) {
  return x
}

module.exports = identity
