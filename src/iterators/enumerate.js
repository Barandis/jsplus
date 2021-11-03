// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
 * @param {iterable} iterable The iterable to be enumerated.
 * @param {number} [start=0] The index of the first tuple that gets yielded. Every
 *     succeeding tuple has its index incremented by 1.
 * @yields {array} A tuple of the index of a value in the iterable and the value
 *     itself.
 * @alias module:iterators.enumerate
 */
function* enumerate(iterable, start = 0) {
  const iterator = iterable[Symbol.iterator]()
  let result = iterator.next()
  let index = Math.trunc(start)

  while (!result.done) {
    yield [index, result.value]
    index += 1
    result = iterator.next()
  }
}

module.exports = enumerate
