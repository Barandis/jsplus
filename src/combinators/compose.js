// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Combines two or more single-parameter functions into one single-parameter function that
 * passes the results from its contained functions to the next and returns the result of the
 * last contained function.
 *
 * The order of the functions is reversed, as is traditional in functional programming. If
 * you need the order to not be reversed, use `{@link module:combinators.pipe|pipe}`.
 *
 * @param {...function} fns The functions that should be composed into a single function.
 * @returns {function} A single function that is the composition of all of the provided
 *     functions.
 * @alias module:combinators.compose
 */
function compose(...fns) {
  return x => fns.reduceRight((y, f) => f(y), x)
}

module.exports = compose
