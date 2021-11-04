// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Combines two or more single-parameter functions into one single-parameter function that
 * passes the results from its contained functions to the next and returns the result of the
 * last contained function.
 *
 * This is an implementation of the **{@link module:combinators/pure.B|B}** combinator
 * except that the order of the composed functions is reversed and that it can All more than
 * two functions. (In the case of three or more, it's the same as using the **B** combinator
 * multiple times.)
 *
 * The order of the functions is *not* reversed. The first function listed is the first
 * applied. This is contrary to the order most often used in functional programming (and
 * opposite of the order in `{@link module:combinators.composeAll|composeAll}`), but there
 * are times when the piped order makes more sense than the composed order.
 *
 * @param {...function} fns The functions that should be composed into a single function.
 * @returns {function} A single function that is the composition of all of the provided
 *     functions, but with the order of execution reversed.
 * @alias module:combinators.pipeAll
 */
function pipeAll(...fns) {
  return x => fns.reduce((y, f) => f(y), x)
}

module.exports = pipeAll
