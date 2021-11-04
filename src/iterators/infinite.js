// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Creates an infinite iterator of numbers.
 *
 * By default, the iterator starts at `0` and increases by 1 each invocation. Both of these
 * can be changed; the first argument is the starting value, and the second is the step
 * value.
 *
 * This is much like `{@link module:iterators.range|range}` except that it doesn't have an
 * end or inclusive parameter and therefore does not, in fact, end. It can also be emulated
 * by passing a function to `{@link module:iterators.iterator|iterator}` that never returns
 * `undefined`. The `iterator` way allows more flexibility - it can emulate any series, not
 * just a linear one - but `infinite` is more convenient for the most usual cases.
 *
 * ```javascript
 * const iter = infinite()
 * console.log(iter.next().value) // 0
 * console.log(iter.next().value) // 1
 * console.log(iter.next().value) // 2
 * ...
 * console.log(iter.next().value) // 42
 * console.log(iter.next().value) // 43
 * ...
 * ```
 *
 * @param {number} [start=0] The beginning value for the iterator.
 * @param {number} [step=1] The number added to the current value for the next value.
 * @yields {number} The start value first, and then the last value plus the step value.
 * @alias module:iterators.infinite
 */
function* infinite(start = 0, step = 1) {
  let current = start
  for (;;) {
    yield current
    current += step
  }
}

module.exports = infinite
