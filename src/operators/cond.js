// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `?:` conditional (ternary) operator.
 *
 * This is a three-parameter function, so the normal way of manipulating argument order for
 * operators (`{@link module:combinators.swap|swap}`) would require multiple calls composed
 * to do what is intended. Instead, `{@link module:combinators.rotl|rotl}` and
 * `{@link module:combinators.rotr|rotr}`, both of which work with three-parameter functions
 * natively, may be useful. In particular, `rotr(cond)` will create a function where the
 * conditional argument is *last*, which may be useful.
 *
 * ```javascript
 * console.log(true ? 1 : 0)        // 1
 * console.log(cond (true) (1) (0)) // 1
 *
 * const bool2num = rotr (cond) (1) (0)
 * console.log(bool2num (true))     // 1
 * console.log(bool2num (false))    // 0
 * ```
 *
 * @param {boolean} x The conditional operand.
 * @param {*} y The operand that is returned if `x` evaluates to `true`.
 * @param {*} z The operand that is returned if `x` evaluates to `false`.
 * @returns {*} Either `y` or `z`, depending on whether `x` is `true` or `false`.
 * @alias module:operators.cond
 */
function cond(x, y, z) {
  return x ? y : z
}

module.exports = curry(cond)
