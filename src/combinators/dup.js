// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const curry2 = require('functions/curry2')

/**
 * Applies a function to an argument twice, effectively duplicating the argument.
 *
 * This is an implementation of the **{@link module:combinators/pure.W|W}** combinator.
 *
 * ```javascript
 * const square = dup (mul)
 * const s2 = square (2)
 * const s5 = square (5)
 *
 * console.log(s2) // 4
 * console.log(s5) // 25
 * ```
 *
 * @param {function} f A function that gets applied to `x` twice.
 * @param {*} x An argument that is passed to `f` twice.
 * @returns {*} The return value of `f` when applied to `x` twice.
 * @alias module:combinators.dup
 */
function dup(f, x) {
  return curry(f)(x)(x)
}

module.exports = curry2(dup)
