// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const curry2 = require('functions/curry2')
const iterator = require('iterators/iterator')

/**
 * Reduces an iterable with a function.
 *
 * This function will apply the reducer function `fn` to the first two elements of the input
 * iterable, and then will apply the same reducer function to that result and the next
 * element of the iterable, repeating until there are no elements left. The result is a
 * single answer, which is returned.
 *
 * As this function does not produce an iterator and needs to consume an entire iterable to
 * calculate its answer, it should not be used with an infinite iterator as the input.
 *
 * Use of this function is done a little differently than traditional `Array.reduce`. It
 * does not have the option of an initial value. This means two things: first, the reduction
 * of a single-element iterable will just be that single element itself, and second, the
 * reducer function needs to have both arguments and the return value be of the same type.
 * This is contrary to `Array.reduce`, which has a first argument and return value of the
 * same type but which can take a different type for the second argument.
 *
 * The upshot is that using a `map` before the `reduce` is suggested in many scenarios
 * where, in traditional JavaScript reduction, you would do that mapping as a part of the
 * reducer function itself. For example, if one wanted to turn an array of digits into
 * strings and then concatenate them, the `Array.reduce` way would be like this:
 *
 * ```javascript
 * const fn = (acc, value) => acc + value.toString()
 * function stringify(xs) {
 *   return xs.reduce(fn, '')
 * }
 * ```
 *
 * This maps the values in the middle of the reducer function (the `toString` call) and
 * wouldn't work as well with this iterator `reduce`. Instead, you would want to do this:
 *
 * ```javascript
 * function stringify(xs) {
 *   const mapped = map(x => x.toString(), xs)
 *   return reduce((x, y) => x + y, mapped)
 * }
 * ```
 *
 * Though in reality, with the other functions in this library, it would be even better to
 * do this:
 *
 * ```javascript
 * const stringify = compose (reduce (add), map (string))
 * ```
 *
 * Requiring the reducer function to take two arguments of the same type makes you have to
 * think more about the kind of reduction you want to do, but it makes it easier to use
 * functions you already have lying around to do things in a more concise and understandable
 * manner.
 *
 * @param {function} fn The reducer function, a function of two parameters that will receive
 *      the current value and the next element as arguments.
 * @param {*} x The collection to reduce. This can be any type for which
 *      `{@link module:iterators.iterator|iterator}` will produce a non-null value, meaning
 *      objects, functions, or anything that implements the iterable protocol.
 * @returns {*} The result of the reducer function's last call.
 * @alias module:iterators.reduce
 */
function reduce(fn, x) {
  const iter = iterator(x)
  const reducer = curry(fn)
  let current

  const first = iter.next()
  if (!first.done) {
    current = first.value
  }

  for (const value of iter) {
    current = reducer(current)(value)
  }

  return current
}

module.exports = curry2(reduce)
