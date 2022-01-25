// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const curry4 = require('functions/curry4')

/**
 * Applies two different functions to an argument, and then applies a third function to the
 * two results.
 *
 * This is an implementation of the **{@link module:combinators/pure.Sp|S'}** combinator.
 * It's also equivalent to a monadic fork in array languages such as APL and J. It's a very
 * handy combinator for pre-processing an argument before passing it to a main function.
 *
 * This combinator is similar to `{@link module:combinators.substitute|substitute}`. In
 * fact, passing in `{@link module:combinators.identity|identity}` as either `g` or `h` will
 * make it behave identically to `substitute`. It's similar to the famous `liftA2` in
 * Haskell.
 *
 * This first example creates a function `average` that passes its argument (an array of
 * numbers) to a a summing function and to a counting function before using a division
 * function on the results. In other words, it sums the elements of an array and then
 * divides by the number of elements in that array, which is just calculating the average.
 *
 * ```javascript
 * const sum = reduce (add)
 * const length = prop ('length')
 * const average = converge (div) (sum) (length)
 *
 * const avg1 = average ([1, 2, 3, 4, 5])
 * const avg2 = average ([10, 2, 6, 4, 8])
 *
 * console.log(avg1) // 3
 * console.log(avg2) // 6
 * ```
 *
 * This second example is a famous one from array languages: determining whether a string is
 * a palindrome. (It's famous in array languages because something so "complex" can be done
 * in five characters in APL: `(⌽≡⊢)`. This is a fork in APL, which is reproduced by
 * `converge`.) This is done by reversing the string and comparing that to the original
 * (unreversed) string. It shows a case where `identity` is used as one of the initial
 * functions and how that can be replaced with `substitute`.
 *
 * ```javascript
 * const isPalindrome = converge (eq) (compose (collect) (reverse)) (identity)
 * // This can be done more compactly with `substitute` since one of the
 * // functions is `identity`:
 * // const isPalindrome = substitute (eq) (compose (collect) (reverse))
 *
 * const radar = isPalindrome('radar')
 * const test = isPalindrome('test')
 *
 * console.log(radar) // true
 * console.log(test)  // false
 * ```
 *
 * @param {function} f A function of two parameters. It's applied to the return values of
 *    `g` and `h` when each is applied to `x`.
 * @param {function} g A function of one parameter. It's applied to `x` and the return value
 *    is passed to `f`.
 * @param {function} h A function of one parameter. It's applied to `x` and the return value
 *    is passed to `f`.
 * @param {*} x A value that is passed to functions `g` and `h` separately.
 * @returns {*} The return value of function `f`.
 * @alias module:combinators.converge
 */
function converge(f, g, h, x) {
  return curry(f)(g(x))(h(x))
}

module.exports = curry4(converge)
