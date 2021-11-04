// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Creates a constant function, which always returns the same value no matter its arguments.
 *
 * This is an implementation of the **{@link module:combinators/pure.K|K}** combinator. Its
 * useful in contexts where a function is required but you don't care about the argument(s)
 * to that function.
 *
 * ```javascript
 * const fn = constant(1729)
 *
 * console.log(fn())       // 1729
 * console.log(fn('test')) // 1729
 * console.log(fn(1728))   // 1729
 * ```
 *
 * @param {*} x The value that the constant function should return.
 * @returns {function} A function that returns `x` when invoked no matter the arguments.
 * @alias module:combinators.constant
 */
function constant(x) {
  return () => x
}

module.exports = constant
