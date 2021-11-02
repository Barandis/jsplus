// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `>>>` operator.
 *
 * `blsr` stands for "bitwise logical shift right". This is in contrast to
 * `{@link module:operators.bshr|bshr}`, which is an *arithmetic* right shift. The
 * difference is that `bshr` shifts copies of the sign bit onto the left, while `blsr`
 * shifts 0's onto the left.
 *
 * For positive numbers, logical and arithmetic shifts are identical. They can produce some
 * very different results on negative numbers, though.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `>>>`. If you need the argument to be the one on the *right* side, you can use the
 * `{@link module:combinators.flip|flip}` combinator on `blsr`. See the examples below.
 *
 * ```javascript
 * console.log(-114 >>> 2)    // 1073741795
 * console.log(blsr(-114, 2)) // 1073741795
 * console.log(blsr(-114)(2)) // 1073741795
 *
 * const lsr114 = blsr(-114)
 * console.log(lsr114(2))     // 1073741795
 *
 * const lsrBy2 = flip(blsr, 2)
 * console.log(lsrBy2(-114))  // 1073741795
 * ```
 *
 * @param {number} x The number to be shifted.
 * @param {number} y The number of bits to right shift `x`.
 * @returns {number} The result of shifting `x` to the right by `y` bits, shifting 0's onto
 *      the left.
 * @alias module:operators.blsr
 */
function blsr(x, y) {
  return x >>> y
}

module.exports = curry(blsr)
