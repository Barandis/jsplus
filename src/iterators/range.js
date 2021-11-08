// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Generates a range of numbers. This is inspired by Python's `range` function.
 *
 * This generator yields a range of numbers, starting with `start` and incrementing each
 * succeeding number by `step` until `end` is reached. If `inclusive` is true, then `end`
 * itself can be included in the range.
 *
 * If only one numeric parameter is provided, it is assumed to be `end`. Two numbers are
 * interpreted as `start` and `end`. In any cases where they aren't specified, `start` is
 * `0` and `step` is `1`.
 *
 * If `start` is greater than `end`, the range will run in reverse. In this case, each
 * successive number is *de*cremented by `step`. `step` itself should always be positive; if
 * a negative `step` is provided, its absolute value will be used instead, and if `0` is
 * provided, it will be regarded as `1`. The direction of the iteration is always determined
 * by `start` and `end`.
 *
 * ```javascript
 * // Using collect to change iterators to arrays for ease of display
 * const e = collect(range(4))
 * console.log(e)    // [0,1,2,3]
 *
 * const ei = collect(range(4, true))
 * console.log(ei)   // [0,1,2,3,4]
 *
 * const se = collect(range(2, 4))
 * console.log(se)   // [2,3]
 *
 * // 0 is necessary because range(4, 2) would be interpreted as a
 * // start of 4 and end of 2, producing [4,3]
 * const sep = collect(range(0, 4, 2))
 * console.log(sep)  // [0,2]
 *
 * const sepi = collect(range(0, 4, 2, true))
 * console.log(sepi) // [0,2,4]
 *
 * // Probably the most common use: in `for...of` loops
 * const a = [0, 1, 2, 3]
 * const b = [0, 5, 10, 15]
 * const c = []
 * // reversed; range produces 3, 2, 1, 0
 * for (const i of range(3, 0, true)) {
 *   c.push(a[i] * b[i])
 * }
 * console.log(c)    // [45,20,5,0]
 *
 * // Sometimes you just need a loop to run x times without caring
 * // about the index; suggest using _ in that case
 * function line(length) {
 *   let result = ''
 *   for (const _ of range(length)) result += '-'
 *   return result
 * }
 * console.log(line(10))  // "----------"
 * ```
 *
 * @param {number} [start=0] The first number of the range.
 * @param {number} end The last number of the range. By default this number forms the upper
 *     bound of the range without being included in it.
 * @param {number} [step=1] The number to increase the yielded value by during each
 *     iteration.
 * @param {boolean} [inclusive=false] Determines whether `end` should be included as part of
 *     the range.
 * @yields {number} The values that make up the range.
 * @alias module:iterators.range
 */
function* range(start, end, step, inclusive) {
  const s = typeof end === 'number' ? start : 0
  const e = typeof end === 'number' ? end : start
  const p = typeof step === 'number' ? (step === 0 ? 1 : Math.abs(step)) : 1
  const i = typeof step === 'number' ? !!inclusive : typeof end === 'number' ? !!step : !!end

  const fwd = s < e
  let cur = s

  // If the range is moving forward, it's finished if the current value is greater than or
  // equal to the end point (just greater than if the range is inclusive). If the range is
  // moving backwards, it's finished if the current value is *less than* or equal to the end
  // point (just less than if the range is inclusive).
  const finished = () => (fwd ? (i ? cur > e : cur >= e) : i ? cur < e : cur <= e)

  // `cur` is a local variable not readable from outside this function, so there's no need
  // to worry about it being updated during the yield
  /* eslint-disable require-atomic-updates */
  while (!finished()) {
    yield cur
    cur = fwd ? cur + p : cur - p
  }
  /* eslint-enable require-atomic-updates */
}

module.exports = range
