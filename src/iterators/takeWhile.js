// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')
const iterate = require('iterators/iterate')

/**
 * Returns the elements of a collection until a predicate returns `false`.
 *
 * The change from returning elements to not happens exactly once. Once the predicate is
 * `false`, the return iterator is complete. It will not then test any further elements, so
 * later elements that make the predicate produce `true` will not be yielded. (That's the
 * difference between this function and `{@link module:iterators.filter|filter}`; the latter
 * will continue to yield elements even after the first one that returns `false` from the
 * predicate).
 *
 * ```javascript
 * const result = takeWhile (swap (lt) (3)) ([1, 2, 3, 1, 0])
 * console.log(result) // [1, 2]
 * ```
 *
 * @param {function} fn A function of one parameter that returns a boolean (a predicate).
 *      Elements of the input are passed into the predicate and are yielded by the result
 *      iterator until the first one returns `false`.
 * @param {*} x The collection to take elements from.
 * @returns {iterator} An iterator that yields elements of `x` until the first one that
 *      makes `fn` return `true`.
 * @alias module:iterators.takeWhile
 */
function* takeWhile(fn, x) {
  for (const value of iterate(x)) {
    if (!fn(value)) break
    yield value
  }
}

module.exports = curry2(takeWhile)
