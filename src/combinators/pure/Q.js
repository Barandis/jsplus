// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **Q** combinator. This is like the composition combinator, in reverse order, so
 * perhaps it could be said to be a pipe combinator.
 *
 * | Property              | Value                            |
 * |-----------------------|----------------------------------|
 * | Type signature        | `(a -> b) -> (b -> c) -> a -> c` |
 * | Lambda representation | `λxyz.y(xz)`                     |
 * | SK system             | `S(K(S(S(KS)K)))K`               |
 * | BCKW system           | `CB`                             |
 * | Bird                  | Queer bird                       |
 *
 * The **Q** combinator, like the **{@link module:combinators/pure.B|B}** combinator,
 * combines two single-argument functions into another single argument function that
 * performs the same operators as the component functions. Unlike **B**, this combinator
 * applies the *first* argument to the third, and then the second to that result, rather
 * than applying the *second* argument first.
 *
 * The bird moniker comes from the fact that *To Mock a Mockingbird* was written in 1985,
 * when queer mostly meant "strange".
 *
 * @param {function} a A function of one parameter. This function takes `c` as its argument,
 *      and its return value becomes the argument to `b`.
 * @param {function} b A function of one parameter. This function accepts the return value
 *      from `a`, and this function's return value becomes the return value of the
 *      combinator.
 * @param {*} c A value that becomes `a`'s argument.
 * @returns {*} The return value of function `b`.
 * @alias module:combinators/pure.Q
 */

const Q = a => b => c => b(a(c))

module.exports = Q
