// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')
const iterator = require('iterators/iterator')
const range = require('iterators/range')

/**
 * Returns the first `n` elements of a collection.
 *
 * If there are fewer than `n` elements in the collection already, the collection will be
 * returned. No additional elements will be added to it.
 *
 * ```javascript
 * const arr = take(3)([1, 2, 3, 4, 5])
 * const str = take(3)('testing')
 * const obj = take(3)({ a: 1, b: 2, c: 3, d: 4, e: 5 })
 *
 * console.log(collect(arr)) // [1, 2, 3]
 * console.log(collect(str)) // 'tes'
 * console.log(collect(obj)) // { a: 1, b: 2, c: 3 }
 * ```
 *
 * @param {number} n The number of elements to take from the input collection.
 * @param {iterable} x The collection to take elements from.
 * @returns {iterator} An iterator of the first `n` elements of `x`.
 * @alias module:iterators.take
 */
function* take(n, x) {
  const iter = iterator(x)
  for (const _ of range(n, 0, -1)) {
    const next = iter.next()
    if (next.done) {
      break
    }
    yield next.value
  }
}

module.exports = curry2(take)
