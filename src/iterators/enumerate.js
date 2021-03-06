// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const iterate = require('iterators/iterate')

/**
 * Generates a set of pairs of iterable elements with their indices. This is inspired by
 * Python's `enumerate` function.
 *
 * For arrays, these two statements do the same thing:
 *
 * * `for (const [i, value] of array.entries()) { ... }`
 * * `for (const [i, value] of enumerate(array)) { ... }`
 *
 * The difference is that `enumerate` works on *any* iterable, not only those that have
 * `entries` defined upon them.
 *
 * This function also provides the option to start the index (the first element of the
 * yielded tuple) from a number other than 0. This number can be passed in as the optional
 * `start` parameter.
 *
 * @param {iterable} x The collection to be enumerated.
 * @param {number} [start=0] The index of the first tuple that gets yielded. Every
 *      succeeding tuple has its index incremented by 1.
 * @returns {iterator} An iterator containing one entry for each element in `x`. Each entry
 *      will be a two-element array of the index followed by the value.
 * @alias module:iterators.enumerate
 */
function* enumerate(x, start = 0) {
  const iter = iterate(x)
  let result = iter.next()
  let index = Math.trunc(start)

  while (!result.done) {
    yield [index, result.value]
    index += 1
    result = iter.next()
  }
}

module.exports = enumerate
