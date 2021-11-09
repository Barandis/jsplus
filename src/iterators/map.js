// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')
const iterate = require('iterators/iterate')

/**
 * Passes each element of an iterable to a mapping function, returning the results in an
 * iterator.
 *
 * ```javascript
 * const result = map (add(1)) ([1, 2, 3])
 * console.log(result.next().value) // 2
 * console.log(result.next().value) // 3
 * console.log(result.next().value) // 4
 * console.log(result.next().done)  // true
 * ```
 *
 * @param {function} fn A one-parameter function. Each element of `iterable` is used as an
 *      argument to this function, and its return values are yielded by the resulting
 *      iterator.
 * @param {*} x The collection to map.
 * @returns {iterator} An iterator containing the return values of `fn` when applied to each
 *      of the elements of `x`.
 * @alias module:iterators.map
 */
function* map(fn, x) {
  for (const value of iterate(x)) {
    yield fn(value)
  }
}

module.exports = curry2(map)
