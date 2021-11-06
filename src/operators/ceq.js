// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `==` coercing equals operator.
 *
 * You *probably* mean to use `{@link module:operators.eq|eq}` instead.
 *
 * ```javascript
 * console.log(3 == '3')      // true
 * console.log(ceq (3) ('3')) // true
 *
 * const ceq3 = ceq (3)
 * console.log(ceq3 ('3'))    // true
 *
 * console.log(3 == 4)        // false
 * console.log(ceq (3) (4))   // false
 * console.log(ceq3 (4))      // false
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether the two arguments are equal, with equality defined by `==`.
 * @alias module:operators.ceq
 */
function ceq(x, y) {
  // eslint-disable-next-line eqeqeq
  return x == y
}

module.exports = curry(ceq)
