// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Combines two or more single-parameter functions into one single-parameter function that
 * passes the results from its contained functions to the next and returns the result of the
 * last contained function.
 *
 * The order of the functions is *not* reversed. The first function listed is the first
 * applied. This is contrary to the order most often used in functional programming (and
 * opposite of the order in `{@link module:combinators.compose|compose}`), but there are
 * times when the piped order makes more sense than the composed order.
 *
 * @param {...function} fns The functions that should be composed into a single function.
 * @returns {function} A single function that is the composition of all of the provided
 *     functions, but with the order of execution reversed.
 * @alias module:combinators.pipe
 */
function pipe(...fns) {
  return x => fns.reduce((y, f) => f(y), x)
}

module.exports = pipe
