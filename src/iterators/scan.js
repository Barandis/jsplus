// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const curry2 = require('functions/curry2')
const iterator = require('iterators/iterator')

/**
 * Reduces an iterable with a function, returning an iterator with all of the intermediate
 * results.
 *
 * This acts very much like `reduce`, except instead of returning the final answer, it
 * returns the intermediate values from each time the function is run (in an iterator). The
 * first value is prepended unmodified to the iterator; this is to ensure that the length of
 * the result of `scan` is the same as the length of the input.
 *
 * Use of this function is done a little differently than traditional `Array.reduce`. It
 * does not have the option of an initial value. The first calculated value is just the
 * result of the reducer function `fn` applied to the first two elements of the input. This
 * means that the reduction function needs to be able to handle both an input element and an
 * "accumulator" as its first argument.
 *
 * Because the initial value in the result iterator will not be passed through the reducer
 * function, it's often best to use `map` before `scan` rather than depend on the reducer
 * function to do its own mapping, as is often done in JavaScript. For instance, if a
 * reducer function makes characters uppercase, it will still not affect the first value in
 * the output iterator; that value is never passed through the reducer function. Mapping to
 * uppercase and *then* scanning may be better.
 *
 * Also, since the first invocation of the reducer function is sent two elements rather than
 * an accumulator value and an element, it's important to be sure that any "mapping" is done
 * on both arguments. For instance, a scan that is supposed to turn numbers into strings and
 * then concatenate them will have to be sure that *both* arguments are turned to strings,
 * since the first invocation will receive two numbers rather than a string and a number. It
 * would probably be best to map the numbers to strings *first* and then concatenate them
 * with `scan` after.
 *
 * `scan` is a curried function and can therefore easily be partially applied. It accepts a
 * reducer function that can be curried or uncurried.
 *
 * ```javascript
 * const runningSum = scan (add) ([0, 1, 2, 3, 4])
 * console.log(runningSum.next().value)  // 0
 * console.log(runningSum.next().value)  // 1
 * console.log(runningSum.next().value)  // 3
 * console.log(runningSum.next().value)  // 6
 * console.log(runningSum.next().value)  // 10
 *
 * const mulScan = scan (mul)
 * const factorial = mulScan ([1, 2, 3, 4, 5])
 * console.log(factorial.next().value)   // 1
 * console.log(factorial.next().value)   // 2
 * console.log(factorial.next().value)   // 6
 * console.log(factorial.next().value)   // 24
 * console.log(factorial.next().value)   // 120
 * ```
 *
 * @param {function} fn The reducer function, a function of two parameters that will receive
 *      the current value and the next element as arguments.
 * @param {*} x The collection to scan. This can be any type for which
 *      `{@link module:iterators.iterator|iterator}` will produce a non-null value, meaning
 *      objects, functions, or anything that implements the iterable protocol.
 * @yields {*} The results of the reducer function as it is passed new elements.
 * @alias module:iterators.scan
 */
function* scan(fn, x) {
  const iter = iterator(x)
  const reducer = curry(fn)
  let current

  const first = iter.next()
  if (!first.done) {
    current = first.value
    yield current
  }

  for (const value of iter) {
    current = reducer(current)(value)
    yield current
  }
}

module.exports = curry2(scan)
