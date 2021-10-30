// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Partially applies arguments to a function, resulting in another function that takes the
 * rest of the arguments.
 *
 * Unlike {@link module:functions.curry|curry}, this function also takes some arguments
 * (hence it being partial application and not currying). It returns a function that takes
 * more arguments, and calling *that* function will result in an answer.
 *
 * Note that this function always returns a function, even when provided enough arguments to
 * satisfy the function it partially completes. Another call (presumably with empty
 * parentheses) will have to be made to get the return value.
 *
 * # Examples
 *
 * ```javascript
 * const sum = partial((a, b, c) => a + b + c, 1, 2)
 *
 * console.log(sum(3))    // 6
 * console.log(sum(10))   // 13
 * console.log(sum(1001)) // 1004
 *
 * // This still returns a function even though three arguments have been supplied.
 * const prod = partial((a, b, c) => a * b * c, 2, 3, 4)
 *
 * // The function still needs to be invoked to get the answer.
 * console.log(prod())    // 24
 * ```
 *
 * @param {function} fn The function to be partially applied.
 * @param {...*} args The arguments to partially apply to `fn`.
 * @returns {function} A new function that takes a variable number of arguments and applies
 *     them after `args` are applied.
 * @alias module:functions.partial
 */
function partial(fn, ...args) {
  return (...rest) => fn(...args, ...rest)
}

module.exports = partial
