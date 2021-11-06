// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the binary `-` subtraction operator.
 *
 * Note that when used with a single argument, that argument is the minuend (the number from
 * which the other is subtracted). If you need the argument to be the subtrahend (the number
 * that is subtracted from the other number), use the `{@link module:combinators.swap|swap}`
 * combinator. See the examples below.
 *
 * ```javascript
 * console.log(4 - 7)              // -3
 * console.log(sub (4) (7))        // -3
 *
 * const sub4 = sub (4)
 * console.log(sub4 (7))           // -3
 *
 * console.log(swap (sub) (4) (7)) // 3
 *
 * const minus4 = swap (sub) (4)
 * console.log(minus4 (7))         // 3
 * ```
 *
 * @param {number} x The minuend.
 * @param {number} y The subtrahend.
 * @returns {number} The difference of `x` and `y`.
 * @alias module:operators.sub
 */
function sub(x, y) {
  return x - y
}

module.exports = curry(sub)
