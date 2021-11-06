// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a function with an arbitrary number of arguments.
 *
 * This function is similar to the numbered curry functions
 * `{@link module:functions.curry2|curry2}`, `{@link module:functions.curry3|curry3}`,
 * `{@link module:functions.curry4|curry4}`, and `{@link module:functions.curry5|curry5}`,
 * and in fact `curryn(3, fn)` behaves the same as `curry3(fn)`. The number provided as the
 * first argument dictates how many arguments the curried function will have.
 *
 * Passing 0 or 1 as the first argument will result in the function simply being returned. A
 * single-argument curried function is the same as a single-argument function that isn't
 * curried (at least in JavaScript).
 *
 * If you know how many arguments a function need to take, and if that number is less than
 * five, it's suggested to use one of the specific numbered curry functions. They're simpler
 * and will be slightly faster.
 *
 * Rather, this function is useful in two cases: when you either don't know until runtime
 * how many arguments a function will be using, or when you want to curry a function of more
 * than five arguments (because there is no specific curry function for parameter lists that
 * large).
 *
 * ```javascript
 * // variadic function, will sum any number of numbers given to it
 * const sum = (...ns) => reduce(add, ns)
 *
 * const sum2 = curryn(2, sum)
 * const result2 = sum2 (1) (2)
 * console.log(result2)   // 3
 *
 * const sum6 = curryn(6, sum)
 * const result6 = sum6 (1) (2) (3) (4) (5) (6)
 * const partial = sum6 (1) (2) (3) (4) (5)
 * console.log(result6)   // 21
 * console.log(partial)   // function curried(a)
 * ```
 *
 * @param {number} n The number of arguments that the function to be curried has.
 * @param {function} fn The function to be curried.
 * @returns {function} A curried function of `n` arguments.
 * @alias module:functions.curryn
 */
function curryn(n, fn) {
  if (n < 2) return fn

  function curried(remaining, ...args) {
    return remaining === 0 ? fn(...args) : a => curried(remaining - 1, ...args, a)
  }

  return (...args) => curried(n - 1, ...args)
}

module.exports = curryn
