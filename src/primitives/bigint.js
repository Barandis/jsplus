// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Converts a value into a BigInt.
 *
 * The argument can be either a number, a boolean, or a string that parses into a number
 * (the string must wholly parse into a number; it doesn't work like `parseInt` which will
 * just stop parsing when it gets to the first non-numeric character).
 *
 * A number must be an integer; a floating point number will throw a `SyntaxError`. A number
 * in scientific notation is fine as long as it represents an integer. (If it does not, such
 * as in `3.22e1`, a `RangeError` will be thrown.) Keep in mind that numbers that represent
 * integers larger than `Number.MAX_SAFE_INTEGER` will be converted but will lose precision.
 * A string must not be in scientific notation; it will throw a `SyntaxError` even if the
 * number is an integer, as in `"3e1"`. A boolean will produce either `1n` or `0n`.
 *
 * For the sake of completeness, you can also use an empty array, which produces `0n`, or an
 * array with one element that is a number or a string, which will produce the same number
 * that the number or string alone would have produced.
 *
 * Any other argument will throw a `SyntaxError` (including a single-element boolean array,
 * for whatever reason).
 *
 * A string is required to get a number that is greater than `Number.MAX_SAFE_INTEGER`.
 * Using a number larger than this (by using scientific notation) will introduce some
 * inaccuracy.
 *
 * ```javascript
 * console.log(bigint(1729))                       // 1729n
 * console.log(bigint(true))                       // 1n
 * console.log(bigint(6.022e23))                   // 602200000000000027262976n
 * console.log(bigint('602200000000000000000000')) // 602200000000000000000000n
 * console.log(bigint([23]))                       // 23n
 * ```
 *
 * @param {number|string|boolean|array} x The value to be converted.
 * @returns {bigint} A BigInt version of that value.
 * @throws {SyntaxError} If the value `x` is not a boolean, a number, a string that parses
 *      into a number, an empty array, an array of one number, or an array of one string
 *      that parses into a number.
 * @throws {RangeError} If a value is a number that is not an integer.
 * @alias module:primitives.bigint
 */
function bigint(x) {
  return BigInt(x)
}

module.exports = bigint
