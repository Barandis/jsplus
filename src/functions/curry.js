// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const CURRIED = Symbol('barandis/curried')

/**
 * Produces a curried function out of a regular function.
 *
 * This curried function is quite flexible. If it is called with the same number of
 * arguments as the original function, then it will simply execute the original function.
 *
 * However, if it is called with fewer arguments, it will return a function that takes only
 * the *remaining* arguments and still produces the same result. The returned function is
 * itself curried, so this process can be done again.
 *
 * This currying function requires that its original function specify its arguments. It will
 * not work on functions that use `arguments` to determine its arguments. Rest parameters
 * and default parameters are not counted, so using this function with them will produce
 * curried functions that expect a number of arguments in total that do not include those
 * parameters (or anything after them).
 *
 * If a function has already been curried by this function, or if it has less than two
 * arguments, passing that function to `curry` will be a no-op (the same function will be
 * returned without modification). A corollary is that `curry` will not curry a fully
 * curried function (one in which no parameter list has more than one parameter).
 *
 * ```javascript
 * const sum = curry((a, b, c) => a + b + c)
 *
 * // Each of the following are equivalent, and all print '6' to the console.
 * console.log(sum(1, 2, 3))
 * console.log(sum(1, 2)(3))
 * console.log(sum(1)(2, 3))
 * console.log(sum()(1, 2, 3))
 * console.log(sum(1)(2)(3))
 * ```
 *
 * @param {function} fn A function of any number of arguments.
 * @returns {function} A new function that behaves as `fn`, unless it's called with fewer
 *      arguments than the number given in `fn`'s definition. In this case, the new function
 *      will return another new function that accepts the *rest* of the arguments.
 * @alias module:functions.curry
 */
function curry(fn) {
  if (fn[CURRIED] || fn.length < 2) return fn

  function curried(...args) {
    return args.length >= fn.length ? fn(...args) : (...rest) => curried(...args, ...rest)
  }
  Object.defineProperty(curried, CURRIED, { value: true })

  return curried
}

module.exports = curry
