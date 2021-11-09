// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')
const iterate = require('iterators/iterate')

/**
 * Filters the elements of an iterable, returning in an iterator only the ones that make a
 * filtering function return `true`.
 *
 * ```javascript
 * // Filter odd numbers
 * const odd = pipe (swap (rem) (2)) (ne (0))
 * const result = filter (odd) ([1, 2, 3, 4, 5])
 *
 * console.log(result.next().value) // 1
 * console.log(result.next().value) // 3
 * console.log(result.next().value) // 5
 * console.log(result.next().done)  // true
 * ```
 *
 * @param {function} fn A predicate function (a single-parameter function that returns a
 *      boolean). This predicate is run once for every element of `x` with its argument set
 *      to that element; the elements that cause the predicate to return `true` are the ones
 *      that are retained in the result iterator.
 * @param {*} x The collection to filter.
 * @returns {iterator} An iterator containing each element in `x` that makes `fn` return
 *      `true` when applied to it.
 * @alias module:iterators.filter
 */
function* filter(fn, x) {
  for (const value of iterate(x)) {
    if (fn(value)) yield value
  }
}

module.exports = curry2(filter)
