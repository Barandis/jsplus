// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const iterator = require('iterators/iterator')

/**
 * Passes each element of an iterable to a mapping function, returning the results in an
 * iterator.
 *
 * This function comes pre-curried so it can be partially applied easily.
 *
 * ```javascript
 * const result = map(add(1), [1, 2, 3])
 * console.log(result.next().value) // 2
 * console.log(result.next().value) // 3
 * console.log(result.next().value) // 4
 * console.log(result.next().done)  // true
 * ```
 *
 * @param {function} fn A one-parameter function. Each element of `iterable` is used as an
 *      argument to this function, and its return values are yielded by the resulting
 *      iterator.
 * @param {iterable} iterable The collection to map.
 * @yields {*} The return value of function `fn` when applied to the next value of
 *      `iterable`.
 * @alias module:iterators.map
 */
function* map(fn, iterable) {
  const iter = iterator(iterable)

  for (const value of iter) {
    yield fn(value)
  }
}

module.exports = curry(map)