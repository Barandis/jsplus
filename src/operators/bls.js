// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `<<` bitwise left shift operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `<<`. If you need the argument to be the one on the *right* side, you can use the
 * `{@link module:combinators.swap|swap}` combinator on `bls`. See the examples below.
 *
 * ```javascript
 * console.log(114 << 2)    // 456
 * console.log(bls(114, 2)) // 456
 * console.log(bls(114)(2)) // 456
 *
 * const ls114 = bls(114)
 * console.log(ls114(2))   // 456
 *
 * const lsBy2 = swap(bls, 2)
 * console.log(lsBy2(114)) // 456
 * ```
 *
 * @param {number} x The number to be shifted.
 * @param {number} y The number of bits to left shift `x`.
 * @returns {number} The result of shifting `x` to the left by `y` bits.
 * @alias module:operators.bls
 */
function bls(x, y) {
  return x << y
}

module.exports = curry(bls)
