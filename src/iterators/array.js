// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const iterate = require('iterators/iterate')

/**
 * Transforms an iterable into an array.
 *
 * This is just a nice functional wrapper for `[...iterable]`, but since everything else is
 * functions, it looks nicer to have this be a function too. It's mostly for turning the
 * iterators that this module tends to provide into arrays, but it will work on any kind of
 * value under the same rules as `{@link module:iterators.iterate|iterate}`.
 *
 * This function will always turn the input into an array. For a function that will turn
 * inputs also into strings or objects as appropriate, see
 * `{@link module:functions.collect|collect}`
 *
 * ```javascript
 * const iter = array (iterate ([1, 2, 3, 4, 5]))
 * const str = array ('test')
 * const obj = array ({a: 1, b: 2})
 * const fn = array (x => (x < 5 ? x : undefined))
 * const single = array (4)
 *
 * console.log(iter)   // [1, 2, 3, 4, 5]
 * console.log(str)    // ["t", "e", "s", "t"]
 * console.log(obj)    // [["a", 1], ["b", 2]]
 * console.log(fn)     // [0, 1, 2, 3, 4]
 * console.log(single) // [4]
 * ```
 *
 * @param {*} x The object which is being made into an array.
 * @returns {array} An array version of the argument.
 * @alias module:iterators.array
 */
function array(x) {
  return Array.from(iterate(x))
}

module.exports = array
