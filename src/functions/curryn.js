// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Curries a function with an arbitrary number of arguments.
 *
 * This function behaves much like `{@link module:functions.curry2|curry2}`,
 * `{@link module:functions.curry3|curry3}`, `{@link module:functions.curry4|curry4}`, and
 * `{@link module:functions.curry5|curry5}` in that arguments must be provided in sets of
 * parentheses with no more than one argument within each set. In fact, passing the
 * appropriate number as the first parameter to this function will make it act just like any
 * of those listed (i.e., `curryn(2, fn)` will behave the same as `curry2(fn)`). However, if
 * the number of arguments is known at write-time, it's best to use the specific function
 * for that number of arguments as it will be faster.
 *
 * Rather, this function is useful in two cases: when you either don't know until runtime
 * how many arguments a function will be using, or when you want to curry a function of more
 * than 5 arguments (because there is no specific curry function for parameter lists that
 * large).
 *
 * ```javascript
 * // variadic function, will sum any number of numbers given to it
 * const sum = (...ns) => reduce(add, ns)
 *
 * const sum2 = curryn(2, sum)
 * const result2 = sum2(1)(2)
 * console.log(result2)   // 3
 *
 * const sum6 = curryn(6, sum)
 * const result6 = sum6(1)(2)(3)(4)(5)(6)
 * const partial = sum6(1)(2)(3)(4)(5)
 * console.log(result6)   // 21
 * console.log(partial)   // function curried(a)
 * ```
 *
 * @param {number} n The number of arguments that the function to be curried has.
 * @param {function} fn The function to be curried.
 * @returns {function} A single-argument function that returns another single-argument
 *      function, and so on, `n` times.
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
