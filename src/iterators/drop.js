// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry')
const iterator = require('iterators/iterator')

/**
 * Returns the collection, minus its first `n` elements.
 *
 * If there are fewer than `n` elements in the collection, an empty iterator will be
 * returned instead..
 *
 * ```javascript
 * const arr = drop(3)([1, 2, 3, 4, 5])
 * const str = drop(3)('testing')
 * const obj = drop(3)({ a: 1, b: 2, c: 3, d: 4, e: 5 })
 *
 * console.log(collect(arr)) // [4, 5]
 * console.log(collect(str)) // 'ting'
 * console.log(collect(obj)) // { d: 4, e: 5 }
 * ```
 *
 * @param {number} n The number of elements to drop from the input collection.
 * @param {iterable} x The collection to drop elements from.
 * @returns {iterator} An iterator of the elements of `x` after the first `n` of them.
 * @alias module:iterators.drop
 */
function* drop(n, x) {
  const iter = iterator(x)
  for (let i = 0; i < n; i += 1) {
    iter.next()
  }
  for (const value of iter) {
    yield value
  }
}

module.exports = curry2(drop)
