// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a function with an arbitrary number of declared arguments.
 *
 * The result is a single-argument function. If the original function had more than one
 * argument, then that single-argument function will return another single-argument
 * function. If the original function had more than *two* arguments, then that
 * single-argument function will return yet *anotehr* single-argument function. This
 * continues until there are as many nested single-argument functions as there were
 * arguments in the original function. The most deeply nested function will then gather all
 * of the arguments from the other functions and execute the original function.
 *
 * To illustrate with an example, currying this function
 * ```javascript
 * const sum3 = (a, b, c) => a + b + c
 * ```
 * will produce a function that behaves like this function
 * ```javascript
 * const curriedSum = a => b => c => a + b + c
 * ```
 *
 * To know how many nested functions to create, `curry` reads the number of arguments in the
 * original function and creates that many. This means that some argument types don't work
 * well with `curry`. Optional and rest arguments are not included in the argument total, so
 * currying this function
 * ```javascript
 * const sum2plus = (a, b, ...ns) => a + b + ns.reduce((x, y) => x + y, 0)
 * ```
 * will produce a function that acts like this one
 * ```javascript
 * const bad = a => b => a + b + ns.reduce((x, y) => x + y, 0)
 * ```
 * This, of course, will throw an error when called because `ns` is set to `undefined` and
 * you can't call `reduce` on that.
 *
 * If you need to curry a function that uses rest or optional parameters, use the
 * appropriate numbered curry function (`{@link module:functions.curry2|curry2}`,
 * {@link module:functions.curry3|curry3}`, {@link module:functions.curry4|curry4}`,
 * {@link module:functions.curry5|curry5}`, or {@link module:functions.curryn|curryn}`).
 * These still don't work *well* with these kinds of arguments (currying and variable
 * numbers of arguments never work well together), at least they won't throw an error and
 * you'll largely get what you expect.
 *
 * ```javascript
 * const sum = curry((a, b, c) => a + b + c)
 * const add3 = sum (3)
 * const add34 = sum (3) (4)
 *
 * // Each of the following are equivalent
 * const result1 = sum (1) (2) (3)
 * const result2 = add3 (4) (5)
 * const result3 = add34 (2)
 *
 * console.log(result1)  // 6
 * console.log(result2)  // 12
 * console.log(result3)  // 9
 * ```
 * Most of the functions in this library call `curry` on any multi-argument functions that
 * they accept, and most of the functions in this library that are multi-argument are
 * curried themselves. The library expects everything to be a single-argument function.
 *
 * @param {function} fn A function of any number of arguments.
 * @returns {function} A curried function of the same number of arguments.
 * @alias module:functions.curry
 */
function curry(fn) {
  if (fn.length < 2) return fn

  function curried(...args) {
    return args.length >= fn.length ? fn(...args) : x => curried(...args, x)
  }

  return x => curried(x)
}

module.exports = curry
