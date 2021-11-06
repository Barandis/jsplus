// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `!=` coercing not equals operator.
 *
 * You *probably* mean to use `{@link module:operators.ne|ne}` instead.
 *
 * ```javascript
 * console.log(3 != '3')      // false
 * console.log(cne (3) ('3')) // false
 *
 * const cne3 = cne (3)
 * console.log(cne3 ('3'))    // false
 *
 * console.log(3 != 4)        // true
 * console.log(cne (3) (4))   // true
 * console.log(cne3 (4))      // true
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether the two arguments are unequal, with equality defined by `==`.
 * @alias module:operators.cne
 */
function cne(x, y) {
  // eslint-disable-next-line eqeqeq
  return x != y
}

module.exports = curry(cne)
