// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `>>` bitwise right shift operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `>>`. If you need the argument to be the one on the *right* side, you can use the
 * `{@link module:combinators.swap|swap}` combinator on `brs`. See the examples below.
 *
 * ```javascript
 * console.log(-114 >> 2)      // -29
 * console.log(brs (-114) (2)) // -29
 *
 * const rs114 = brs (-114)
 * console.log(rs114 (2))      // -29
 *
 * const rsBy2 = swap (brs) (2)
 * console.log(rsBy2 (-114))   // -29
 * ```
 *
 * @param {number} x The number to be shifted.
 * @param {number} y The number of bits to right shift `x`.
 * @returns {number} The result of shifting `x` to the right by `y` bits, shifting the sign
 *      bit onto the left.
 * @alias module:operators.brs
 */
function brs(x, y) {
  return x >> y
}

module.exports = curry(brs)
