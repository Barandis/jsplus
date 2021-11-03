// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Determines whether the value is a number.
 *
 * This merely delegates to `Number.isFinite`, which both checks to see that a value is
 * actually a number (and not merely convertible to one, the way global `isFinite` does)
 * and that it is not `Infinity` or `NaN`.
 *
 * Note that while this will return `true` for numbers created using `Number(x)`, it will
 * return `false` for objects created with `new Number(x)`. The latter are not considered
 * numbers, and `typeof` will return `"object"` for them rather than `"number"`.
 *
 * @function
 * @param {*} x The value being tested to see if it's a number.
 * @returns {boolean} Either `true` if the value is a number or `false` if it is not.
 * @alias module:utilities.isNumber
 */
const isNumber = Number.isFinite

module.exports = isNumber
