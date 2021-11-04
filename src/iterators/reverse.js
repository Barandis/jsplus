// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const array = require('iterators/array')

/**
 * Reverses the order of an iterable.
 *
 * While this function does produce an iterator like most of the iterator functions, it
 * requires knowing where the end of the input iterable is. Therefore it will not work with
 * infinite iterators (because they do not have an end) and it does not work lazily in that
 * it must evaluate the entire input iterable to get to the end.
 *
 * ```javascript
 * const arr = reverse([1, 2, 3, 4, 5])
 * const str = reverse('test')
 * const fn = reverse(x => (x < 5 ? x : undefined))
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
