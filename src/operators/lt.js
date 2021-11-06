// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `<` less than operator.
 *
 * Note that when used with a single argument, that argument is the one on the *left* side
 * of the `<`. If you need the argument to be the one on the *right* side, you can either
 * swap the arguments and use `{@link module:operators.gt|gt}` or use the
 * `{@link module:combinators.swap|swap}` combinator on `lt`. See the examples below.
 *
 * ```javascript
 * console.log(3 < 4)         // true
 * console.log(lt (3) (4))    // true
 *
 * const ltFrom3 = lt(3)
 * // This is the same as x => 3 < x
 * console.log(ltFrom3 (4))   // true
 *
 * // To do x => x < 3, there are two choices
 * const lt3a = swap (lt) (3) // Actual x => x < 3
 * const lt3b = gt (3)        // x => 3 > x is the same thing
 * console.log(lt3a (4))      // false
 * console.log(lt3b (4))      // false
 * ```
 *
 * @param {*} x The first parameter.
 * @param {*} y The second parameter.
 * @returns {boolean} Whether `x` is less than `y`.
 * @alias module:operators.lt
 */
function lt(x, y) {
  return x < y
}

module.exports = curry(lt)
