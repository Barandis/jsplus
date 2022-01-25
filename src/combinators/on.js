// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const curry4 = require('functions/curry4')

/**
 * Applies a function to a pair of arguments separately, then applies another function to
 * the two results.
 *
 * This is an implementation of the **{@link module:combinators/pure.P|P}** (also known as
 * **Ψ**) combinator. It's similar to `{@link module:combinators.converge|converge}`, except
 * that this function applies one funciton to two different arguments, while `converge`
 * applies two different functions each to one argument.
 *
 * A common use for this combinator uses `g` to retrieve (from an object property or a
 * database, for example) or to preprocess values before performing a calculation with `f`.
 *
 * ```javascript
 * const getLen = prop ('length')
 * const compare = (a, b) => a < b ? 'second' : 'first'
 * const longest = on (compare) (getLen)
 *
 * const ex1 = longest ([1, 2, 3]) ([1, 2, 3, 4])
 * const ex2 = longest ([1, 2, 3]) ([1, 2])
 *
 * console.log(ex1) // "second"
 * console.log(ex2) // "first"
 * ```
 *
 * @param {function} f A two-argument function that is applied to the return values of `g`.
 * @param {function} g A single-argment function that is applied to both arguments.
 * @param {*} x The first argument that is passed to `g`.
 * @param {*} y The second argument that is passed to `g`.
 * @returns {*} The return value of `f` when applied to the results of `g` when applied to
 *    arguments `x` and `y`.
 * @alias module:combinators.on
 */
function on(f, g, x, y) {
  return curry(f)(g(x))(g(y))
}

module.exports = curry4(on)
