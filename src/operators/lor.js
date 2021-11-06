// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the `||` logical or operator.
 *
 * Note that, while this function still has the short-circuiting behavior of the `||`
 * operator, it still requires both arguments be provided even if the first is enough to
 * determine the outcome. In other words, `lor(true)` will still need a second argument
 * before it provides its answer, even though enough is there to determine that the return
 * value will be `true` and that the second argument won't even be evaluated when provided.
 *
 * ```javascript
 * console.log(true || false)      // true
 * console.log(lor (true) (false)) // true
 *
 * // This will result in `true` no matter the second argument, but the
 * // second argument is still necessary
 * const orTrue = lor (true)
 * console.log(orTrue (false))     // true
 * ```
 *
 * @param {number} x The first operand.
 * @param {number} y The second operand.
 * @returns {number} The logical OR of `x` and `y`. It will return the first argument if it
 *      evaluates to `true`, otherwise it'll return the second argument.
 * @alias module:operators.lor
 */
function lor(x, y) {
  return x || y
}

module.exports = curry2(lor)
