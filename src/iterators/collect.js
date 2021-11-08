// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const iterate = require('iterators/iterate')
const isObject = require('utilities/isObject')
const isString = require('utilities/isString')

/**
 * Collects the elements of an iterable into a JavaScript collection of some kind.
 *
 * This function is primarily for turning the iterators that are commonly returned by
 * various functions in this module into appropriate concrete collections. Working with
 * iterators all the way through is ideal, but at the end it's usual to need a concrete
 * collection to return.
 *
 * The kind of output collection depends on the type of input. If the input is a string or a
 * collection of strings, the output will be a string. If the input is an object or a
 * collection of two-element arrays, the output will be an object. Otherwise the output will
 * be an array.
 *
 * This does create the edge case of, for example, an iterator of two-element arrays that
 * you actually want to be an array. In that case, use
 * `{@link modules:iterator.array|array}` instead.
 *
 * **`collect` is not lazy.** By its nature, it must evaluate an entire iterator to work and
 * is thus not suitable for infinite iterators.
 *
 * ```javascript
 * const arr = collect([1, 2, 3, 4, 5])
 * const str = collect('testing')
 * const obj = collect({ a: 1, b: 2, c: 3 })
 * const a2s = collect(['more', ' ', 't', 'est', 'i', 'n', 'g'])
 * const a2o = collect([[d, 4], [e, 5], [f, 6]])
 *
 * console.log(arr) // [1, 2, 3, 4, 5]
 * console.log(str) // "testing"
 * console.log(obj) // { a: 1, b: 2, c: 3 }
 * console.log(a2s) // "more testing"
 * console.log(a2o) // { d: 4, e: 5, f: 6 }
 * ```
 *
 * @param {*} x The input collection. This will be transformed into an iterator, so `x` can
 *      be of any type (including non-collections).
 * @returns {array|object|string} An output collection (not an iterator) depending on the
 *      values in the input collection. If all input elements are strings, this will be a
 *      string. If all input elements are two-element arrays, this will be an object.
 *      Otherwise this will be an array.
 * @alias module:iterators.collect
 */
function collect(x) {
  // Shortcuts in the cases of inputs of the actual desired output type. This will avoid all
  // of the iteration, checking, and reducing that would otherwise be involved. This also
  // ensures that empty strings and empty objects get returned as strings and objects rather
  // than as an empty array.
  if (isString(x) || isObject(x)) {
    return x
  }

  const array = [...iterate(x)]
  // The `array.every` would pass on empty arrays
  if (array.length > 0) {
    if (array.every(e => isString(e))) {
      return array.join('')
    }
    if (array.every(e => e.length === 2)) {
      return array.reduce((obj, [k, v]) => {
        obj[k] = v
        return obj
      }, {})
    }
  }
  return array
}

module.exports = collect
