// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `>>>` bitwise unsigned right shift operator.
 *
 * The `u` in `burs` stands for "unsigned". This is in contrast to
 * `{@link module:operators.bshr|brs}`, which is an *signed* right shift. The difference is
 * that `brs` shifts copies of the sign bit onto the left, while `burs` shifts 0's onto the
 * left.
 *
 * For positive numbers, signed and unsigned shifts are identical. They can produce some
 * very different results on negative numbers, though.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `>>>`. If you need the argument to be the one on the *right* side, you can use the
 * `{@link module:combinators.swap|swap}` combinator on `burs`. See the examples below.
 *
 * ```javascript
 * console.log(-114 >>> 2)      // 1073741795
 * console.log(burs (-114) (2)) // 1073741795
 *
 * const urs114 = burs (-114)
 * console.log(urs114 (2))      // 1073741795
 *
 * const ursBy2 = swap (burs) (2)
 * console.log(ursBy2 (-114))   // 1073741795
 * ```
 *
 * @param {number} x The number to be shifted.
 * @param {number} y The number of bits to right shift `x`.
 * @returns {number} The result of shifting `x` to the right by `y` bits, shifting 0's onto
 *      the left.
 * @alias module:operators.burs
 */
function burs(x, y) {
  return x >>> y
}

module.exports = curry(burs)
