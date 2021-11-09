// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Determines whether a value is a generator function.
 *
 * This function will return `false` either for regular (non-generator) functions (functions
 * that are not defined with `function*`) or for generators themselves (the objects that are
 * returned when you invoke a generator function).
 *
 * @param {*} `x` The value being tested to see if it is a generator function
 * @returns {boolean} Either `true` if the test value is a generator function or `false` if
 *      it is not.
 * @alias module:utilities.isGeneratorFunction
 */
function isGeneratorFunction(x) {
  return Object.prototype.toString.call(x) === '[object GeneratorFunction]'
}

module.exports = isGeneratorFunction
