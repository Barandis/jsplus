// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `&&` logical and operator.
 *
 * Note that, while this function still has the short-circuiting behavior of the `&&`
 * operator, it still requires both arguments be provided even if the first is enough to
 * determine the outcome. In other words, `land(false)` will still need a second argument
 * before it provides its answer, even though enough is there to determine that the return
 * value will be `false` and that the second argument won't even be evaluated when provided.
 *
 * ```javascript
 * console.log(true && false)       // false
 * console.log(land (true) (false)) // false
 *
 * // This will result in `false` no matter the second argument, but the
 * // second argument is still necessary
 * const andFalse = land (false)
 * console.log(andFalse (true))     // false
 * ```
 *
 * @param {*} x The first operand.
 * @param {*} y The second operand.
 * @returns {*} The logical AND of `x` and `y`. It will return the first argument if it
 *      evaluates to `false`, otherwise it'll return the second argument.
 * @alias module:operators.land
 */
function land(x, y) {
  return x && y
}

module.exports = curry(land)
