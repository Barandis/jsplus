// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `??` nullish coalescing operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `??`. If you need the argument to be the one on the *right* side, you can use the
 * `{@link module:combinators.swap|swap}` combinator on `coal`. See the examples below.
 *
 * ```javascript
 * console.log(false ?? true)       // false
 * console.log(coal (false) (true)) // false
 *
 * const orDef = swap (coal) ('default')
 * console.log(orDef (null))        // "default"
 * console.log(orDef (undefined))   // "default"
 * console.log(orDef ("value"))     // "value"
 * ```
 *
 * @param {*} x The first operand.
 * @param {*} y The second operand.
 * @returns {*} If `x` is not either `null` or `undefined`, then `x`. Otherwise `y`.
 * @alias module:operators.coal
 */
function coal(x, y) {
  return x ?? y
}

module.exports = curry(coal)
