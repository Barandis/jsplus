// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const iterate = require('iterators/iterate')

/**
 * Produces an iterator that cycles through the values in the input collection infinitely.
 *
 * Like `{@link module:iterators.count|count}`, this function can't do anything that
 * `{@link module:iterators.iterate|iterate}` can't already do. However, it can do it more
 * easily.
 *
 * ```javascript
 * const iter = cycle([1, 2, 3])
 *
 * console.log(iter.next().value) // 1
 * console.log(iter.next().value) // 2
 * console.log(iter.next().value) // 3
 * console.log(iter.next().value) // 1
 * console.log(iter.next().value) // 2
 *
 * // The same function, but using iterate
 * const iter2 = iterate(x => (1 + x % 3))
 * ```
 *
 * Notably, `cycle` can take a single value and repeat that value ad infinitum. This can be
 * done by `iterate` or by `count`, but again `cycle` does it more easily.
 *
 * ```javascript
 * const iter = cycle(3)
 *
 * console.log(iter.next().value) // 3
 * console.log(iter.next().value) // 3
 * console.log(iter.next().value) // 3
 * console.log(iter.next().value) // 3
 * console.log(iter.next().value) // 3
 *
 * // The same function, but using count
 * const iter2 = count(3, 0)
 * // And again the same, but with iterate this time
 * const iter3 = iterate(_ => 3)
 * ```
 *
 * **Important note**: This function internally calls `iterate` on its argument as many
 * times as it needed and then produces its values from those iterators. This means you
 * should *not* call `cycle` with a generator argument, as once exhausted, the generator
 * will no longer yield anything and the function will hang. Use a generator function
 * instead.
 *
 * @param {*} x The collection to cycle through infinitely.
 * @returns {iterator} An iterator that yields the elements of the input collection over and
 *      over, infinitely.
 * @alias module:iterators.cycle
 */
function* cycle(x) {
  for (;;) {
    for (const value of iterate(x)) {
      yield value
    }
  }
}

module.exports = cycle
