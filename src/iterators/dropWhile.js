// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')
const iterate = require('iterators/iterate')

/**
 * Drops elements of a collection for as long as a predicate returns `true`.
 *
 * The change from dropping elements to yielding them happens once. After dropping stops,
 * even elements that do not make the predicate return `true` are yielded.
 *
 * ```javascript
 * const result = dropWhile (swap (lt) (3)) ([1, 2, 3, 1, 0])
 * console.log(result) // [3, 1, 0]
 * ```
 *
 * @param {function} fn A function of one parameter that returns a boolean (a predicate).
 *      Elements of the input are passed into the predicate and are yielded by the result
 *      iterator starting when the first one returns `false`.
 * @param {*} x The collection to take elements from.
 * @returns {iterator} An iterator that yields elements of `x` after (and including) the
 *      first one that makes `fn` return `true`.
 * @alias module:iterators.dropWhile
 */
function* dropWhile(fn, x) {
  const iter = iterate(x)
  let next = iter.next()
  while (!next.done) {
    if (!fn(next.value)) {
      yield next.value
      break
    }
    next = iter.next()
  }
  for (const value of iter) {
    yield value
  }
}

module.exports = curry2(dropWhile)
