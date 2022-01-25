// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Produces a function that is a fixed point of a supplied function.
 *
 * A fixed point is a value that is mapped to itself by a function. Since this function
 * provides a fixed point, that means
 * ```javscript
 * fix(f) = f(fix(f))
 * ```
 * for any function `f` that has a fixed point.
 *
 * The standard demonstration for a fixed point of a function is mimicking recursion without
 * actually using recursion. This has little practical value in JavaScript because there
 * already are recursive functions, but it's interesting to see how recursion could be
 * modeled in a language that doesn't allow recursion (which can happen if a language does
 * not have named functions).
 *
 * ```javascript
 * // The normal way, with a recursive function
 * const fact = x => (x === 0 ? 1 : x * fact(x - 1))
 *
 * // The fixed point way
 * // This function replaces the recursive call with a call to a function that is passed in
 * const fn = f => x => (x === 0 ? 1 : x * f(x - 1))
 * const fixFact = fix(fn)
 *
 * const fact5 = fact(5)
 * const fixFact5 = fixFact(5)
 *
 * console.log(fact5)    // 120
 * console.log(fixFact5) // 120
 * ```
 *
 * @param {function} f A function to return the fixed point function for.
 * @returns {function} A new function that is the fixed point of function `f`.
 * @alias module:combinators.fix
 */
function fix(f) {
  return (g => g(g))(g => f(x => g(g)(x)))
}

module.exports = fix
