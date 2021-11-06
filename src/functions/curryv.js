// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const CURRIED = Symbol('curried')

/**
 * Produces a variadiccurried function out of a regular function.
 *
 * Variadic currying means that the curried function is a function of any number of
 * arguments, rather than the normal single-argument function. This variadic function can
 * accept any or all remaining arguments. If it is given fewer than the total number of
 * arguments, it will return *another* variadic curried function. This continues until the
 * total arguments provided to all of the variadic curried funcitons matches the total
 * arguments in the original function; at this point the return value is actually calculated
 * and returned.
 *
 * To make this happen, this currying function reads the number of arguments from the
 * original function. However, this makes it incapable of reacting to some ways of providing
 * those arguments. It will not work on functions that declare no arguments and then use
 * `arguments` to determine what was actually passed. Rest parameters and default parameters
 * are not counted, so using this function with them will produce curried functions that
 * expect a number of arguments in total that do not include those parameters (or anything
 * after them).
 *
 * If a function has already been curried by this function, or if it has less than two
 * arguments, passing that function to `curry` will be a no-op (the same function will be
 * returned without modification). A corollary is that `curry` will not curry a regularly
 * curried function (one in which no parameter list has more than one parameter).
 *
 * **This is largely a convenience function. It doesn't have a lot of compatibility with the
 * rest of this library.** Most other functions either expect single-argument (or regular
 * curried) functions, and if they accept multi-argument functions, they call
 * `{@link module:functions.curry|curry}` on them—and `curry` doesn't work on the variadic
 * functions that `curryv` creates.
 *
 * ```javascript
 * const sum = curry((a, b, c) => a + b + c)
 *
 * // Each of the following are equivalent
 * const res1 = sum (1, 2, 3)
 * const res2 = sum (1, 2) (3)
 * const res3 = sum (1) (2, 3)
 * const res4 = sum () (1, 2, 3)
 * const res5 = sum (1) (2)(3)
 *
 * console.log(res1)  // 6
 * console.log(res2)  // 6
 * console.log(res3)  // 6
 * console.log(res4)  // 6
 * console.log(res5)  // 6
 * ```
 *
 * @param {function} fn A function of any number of arguments.
 * @returns {function} A new function that behaves as `fn`, unless it's called with fewer
 *      arguments than the number given in `fn`'s definition. In this case, the new function
 *      will return another new function that accepts more of the arguments.
 * @alias module:functions.curryv
 */
function curryv(fn) {
  if (fn[CURRIED] || fn.length < 2) return fn

  function curried(...args) {
    return args.length >= fn.length ? fn(...args) : (...rest) => curried(...args, ...rest)
  }
  Object.defineProperty(curried, CURRIED, { value: true })

  return curried
}

module.exports = curryv
