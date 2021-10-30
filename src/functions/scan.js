// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Reduces a collection, returning all of the intermediate reduction values. This is the
 * same as a `reduce` function except that it collects all intermediate results while
 * `reduce` will only return the final result.
 *
 * # Examples
 *
 * ```javascript
 * const array = [1, 2, 3, 4, 5]
 * const sum = (a, b) => a + b
 *
 * const results = scan(array, sum, 0)
 * console.log(results)  // [1,3,6,10,15]
 * ```
 *
 * @param {iterable} iterable The iterable supplying values to the reducer function.
 * @param {function} reducer The reducer function, taking a result and a value and
 *     returning the two reduced together.
 * @param {*} initial The initial value provided to the reducer function on its first call.
 * @returns {array} A collection of all of the values returned by the reducer function. This
 *     array will have one element for each time the reducer function was executed.
 * @alias module:functions.scan
 */
function scan(iterable, reducer, initial) {
  const values = []

  Array.from(iterable).reduce((acc, value) => {
    const result = reducer(acc, value)
    values.push(result)
    return result
  }, initial)

  return values
}

module.exports = scan
