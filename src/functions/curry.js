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
 * single-argument function will return yet *another* single-argument function. This
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
 * Here are some examples of usage.
 *
 * ```javascript
 * const sum = curry((a, b, c) => a + b + c)
 * const add3 = sum (3)
 * const add34 = sum (3) (4)
 *
 * const result1 = sum (1) (2) (3)
 * const result2 = add3 (4) (5)
 * const result3 = add34 (2)
 *
 * console.log(result1)  // 6
 * console.log(result2)  // 12
 * console.log(result3)  // 9
 * ```
 *
 * To know how many nested functions to create, `curry` by default reads the number of
 * arguments in the original function and creates that many. This means that some argument
 * types don't work well with `curry`. Optional and rest arguments are not included in the
 * argument total, so currying this function
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
 * If you need to curry a function that uses rest or optional parameters, a second argument
 * is available that explicitly dictates how many parameters to curry. This will essentially
 * change optional and rest parameters into regular parameters, as there is no such thing as
 * an optional or rest parameter in a curried function, but it does allow working with such
 * functions without throwing errors.
 * ```javascript
 * // Function to calculate sum of an arbitrary number of values
 * const sum = (...ns) => ns.reduce((a, b) => a + b, 0)
 * // Curried function to calculate sum of exactly 2 and 4 values, respectively
 * const sum2 = curry(sum, 2) // same as sum2 = x => y => sum(x, y)
 * const sum4 = curry(sum, 4) // same as sum4 = x => y => z => w => sum(x, y, z, w)
 * ```
 * So a curried rest parameter function still calls the original function internally, but it
 * does not allow a varying number of arguments.
 *
 * This optional second argument can be used on regular functions as well, currying fewer or
 * more arguments than the function actually has. There is likely little reason to do this,
 * however.
 *
 * There are other currying functions in this library, namely
 * `{@link module:functions.curry2|curry2}`, `{@link module:functions.curry3|curry3}`,
 * `{@link module:functions.curry4|curry4}`, and `{@link module:functions.curry5|curry5}`.
 * Each of these functions curry a specific number of parameters and are equivalent to,
 * respectively, `curry(fn, 2)`, `curry(fn, 3)`, `curry(fn, 4)`, and `curry(fn, 5)`. They're
 * a bit simpler and so a little faster and a little easier to debug (because of more
 * straightforward stack traces). They can be considered if you know exactly how many
 * parameters need to be curried in a given function.
 *
 * Most of the functions in this library call `curry` on any multi-argument functions that
 * they accept, and most of the functions in this library that are multi-argument are
 * curried themselves. The library expects everything to be a single-argument function.
 *
 * @param {function} fn A function of any number of parameters.
 * @param {number} [n=fn.length] The number of parameters to curry. This defaults to the
 *      number of parameters in function `fn`, not including any optional or rest
 *      parameters.
 * @returns {function} A curried function of `n` of parameters.
 * @alias module:functions.curry
 */
function curry(fn, n = fn.length) {
  if (n < 2) return fn

  function curried(...args) {
    return args.length >= n ? fn(...args) : x => curried(...args, x)
  }

  return x => curried(x)
}

module.exports = curry
