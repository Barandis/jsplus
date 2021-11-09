// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Reverses the currying on a function, returning a function of multiple parameters.
 *
 * Since curried functions are all single-argument, there's no way to automatically read the
 * number of arguments in the entire function. For this reason, `uncurry` has a second
 * argument like `{@link module:functions.curry|curry}`, but in this case, the argument is
 * *not* optional.
 *
 * The returned function takes `n` arguments. Like any other JavaScript function, if you
 * pass more arguments than that, the extra will be ignored, and if you pass fewer, the
 * unspecified arguments will be set to `undefined`.
 *
 * It is the responsibility of the caller of `uncurry` to get `n` right, as `uncurry` will
 * faithfully produce an `n`-parameter function even if that's not actually the right number
 * of parameters. Getting `n` wrong can lead to functions that return functions rather than
 * expected values (if `n` is too low) or functions that throw errors when they're called
 * (if `n` is to high).
 *
 * ```javascript
 * const curriedSum = a => b => c => a + b + c
 * const sum = uncurry(sum, 3)
 * const result = sum(1, 2, 3)
 * console.log(sum) // 6
 * ```
 *
 * @param {function} fn A curried function of `n` parameters.
 * @param {number} n The number of parameters in the curried function `fn`.
 * @returns {function} An uncurried function of `n` parameters that does the same thing as
 *      the original function `fn`.
 * @alias module:functions.uncurry
 */
function uncurry(fn, n) {
  if (n < 2) {
    return fn
  }
  return (...args) => {
    for (let i = args.length; i < n; i += 1) args.push(undefined)
    return args.slice(0, n).reduce((x, y) => x(y), fn)
  }
}

module.exports = uncurry
