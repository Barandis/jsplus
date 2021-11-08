// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const array = require('iterators/array')

/**
 * Reverses the order of an iterable.
 *
 * **`reverse` should not be used with infinite iterators.** By its nature, it must evaluate
 * an entire iterator so that it can find the end, which is where the new iterator will
 * begin. Thus it returns a lazy value (an iterator), but it eagerly evaluates its input.
 *
 * ```javascript
 * const arr = reverse ([1, 2, 3, 4, 5])
 * const str = reverse ('test')
 * const fn = reverse (x => (x < 5 ? x : undefined))
 *
 * console.log(arr) // [5, 4, 3, 2, 1]
 * console.log(str) // ["t", "s", "e", "t"]
 * console.log(fn)  // [4, 3, 2, 1, 0]
 * ```
 *
 * @param {*} x The collection to reverse.
 * @returns {iterator} An iterator over a version of `x` with its elements in reverse order.
 * @alias module:iterators.reverse
 */
function* reverse(x) {
  const a = array(x)
  for (let i = a.length - 1; i >= 0; i -= 1) {
    yield a[i]
  }
}

module.exports = reverse
