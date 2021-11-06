// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `%` remainder operator.
 *
 * Note that when used with a single argument, that argument is the dividend (the number
 * that gets divided). If you need the argument to be the divisor (the number by which the
 * dividend is divided), use the `{@link module:combinators.swap|swap}` combinator. See the
 * examples below.
 *
 * ```javascript
 * console.log(4 % 7)              // 4
 * console.log(rem (4) (7))        // 4
 *
 * const rem4 = rem (4)
 * console.log(rem4 (7))           // 4
 *
 * console.log(swap (rem) (4) (7)) // 3
 *
 * const remWith4 = swap (rem) (4)
 * console.log(remWith4 (7))       // 3
 * ```
 *
 * @param {number} x The dividend.
 * @param {number} y The divisor.
 * @returns {number} The remainder left when `x` is divided by `y`.
 * @alias module:operators.rem
 */
function rem(x, y) {
  return x % y
}

module.exports = curry(rem)
