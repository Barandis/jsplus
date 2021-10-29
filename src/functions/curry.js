// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
 * ### Examples
 *
 * ```javascript
 * const sum = curry((a, b, c) => a + b + c)
 *
 * // Each of the following are equivalent, and all return 6.
 * sum(1, 2, 3)
 * sum(1, 2)(3)
 * sum(1)(2, 3)
 * sum()(1, 2, 3)
 * sum(1)(2)(3)
 * ```
 *
 * @param {function} fn A function of any number of arguments.
 * @returns {function} A new function that behaves as `fn`, unless it's called with fewer
 *      arguments than the number given in `fn`'s definition. In this case, the new function
 *      will return another new function that accepts the *rest* of the arguments.
 */
function curry(fn) {
  return function curried(...args) {
    return args.length >= fn.length ? fn(...args) : (...rest) => curried(...args, ...rest)
  }
}

module.exports = curry
