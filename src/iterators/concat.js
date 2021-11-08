// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')
const iterator = require('iterators/iterator')

/**
 * Concatenates two collections. The result is an iterator that first yields elements of the
 * first collection, and when that is finished, the elements over the second collection.
 *
 * This function works fine with infinite iterators, but be aware that if the first
 * collection is an infinite iterator, the second collection will never be iterated over.
 *
 * ```javascript
 * const arrarr = concat ([1, 2, 3]) ([4, 5, 6])
 * const arrstr = concat ([1, 2, 3]) ('test')
 * const strstr = concat ('test') ('ing')
 *
 * console.log(collect(arrarr)) // [1, 2, 3, 4, 5, 6]
 * console.log(collect(arrstr)) // [1, 2, 3, 't', 'e', 's', 't']
 * console.log(collect(strstr)) // "testing"
 * ```
 *
 * @param {*} x The first collection to be concatenated.
 * @param {*} y The second collection to be concatenated.
 * @returns {iterator} An iterator of all of the elements of `x` followed by all of the
 *      elements of `y`.
 * @alias module:iterators.concat
 */
function* concat(x, y) {
  for (const value of iterator(x)) {
    yield value
  }
  for (const value of iterator(y)) {
    yield value
  }
}

module.exports = curry2(concat)
