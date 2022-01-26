// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **B₁** combinator. This is a composition combinator for binary functions.
 *
 * | Property              | Value                                      |
 * |-----------------------|--------------------------------------------|
 * | Type signature        | `(a -> b) -> (c -> d -> a) -> c -> d -> b` |
 * | Lambda representation | `λxyzw.x(yzw)`                             |
 * | SK system             | `S(K(S(KS)K))(S(KS)K)`                     |
 * | BCKW system           | `BBB`                                      |
 * | Bird                  | Blackbird                                  |
 *
 * The **B₁** performs the composition of a binary function with a unary one. It's very
 * similar to the **{@link module:combinators/pure.B|B}** combinator, which performs the
 * composition of two unary functions.
 *
 * @param {function} a A function of one parameter. This function accepts the return value
 *      from `b`, and this function's return value becomes the return value of the
 *      combinator.
 * @param {function} b A function of two parameters. This function takes `c` and `d` as its
 *      arguments, and its return value becomes the argument to `a`.
 * @param {*} c A value that becomes `b`'s first argument.
 * @param {*} d A value that becomes `b`'s second argument.
 * @returns {*} The return value of function `a`.
 * @alias module:combinators/pure.B1
 */
const B1 = a => b => c => d => a(b(c)(d))

module.exports = B1
