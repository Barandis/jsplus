// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `<<` operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `<<`. If you need the argument to be the one on the *right* side, you can use the
 * `{@link module:combinators.flip|flip}` combinator on `bshl`. See the examples below.
 *
 * ```javascript
 * console.log(114 << 2)     // 456
 * console.log(bshl(114, 2)) // 456
 * console.log(bshl(114)(2)) // 456
 *
 * const shl114 = bshl(114)
 * console.log(shl114(2))    // 456
 *
 * const shlBy2 = flip(bshl, 2)
 * console.log(shlBy2(114))  // 456
 * ```
 *
 * @param {number} x The number to be shifted.
 * @param {number} y The number of bits to left shift `x`.
 * @returns {number} The result of shifting `x` to the left by `y` bits.
 * @alias module:operators.bshl
 */
function bshl(x, y) {
  return x << y
}

module.exports = curry(bshl)
