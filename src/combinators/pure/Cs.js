// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **C\*** combinator. This is the flip or swap combinator, once removed.
 *
 * | Property              | Value                                    |
 * |-----------------------|------------------------------------------|
 * | Type signature        | `(a -> b -> c -> d) -> a -> c -> b -> d` |
 * | Lambda representation | `λxyzw.xywz`                             |
 * | SK system             | `S(K(S(S(K(S(KS)K))S)(KK)))`             |
 * | BCKW system           | `BC`                                     |
 * | Bird                  | Cardinal (once removed)                  |
 *
 * The **C\*** combinator bears an obvious resemblence to the
 * **{@link module:combinators/pure.C|C}** combinator in that it swaps the last two of its
 * arguments before application. However, the **C\*** combinator takes *four* arguments
 * rahter than three, meaning that the order of its first two is retained rather than just
 * the order of its first.
 *
 * @param {function} a A function of three parameters. This function needs to be able to
 *      accept `b`, `d` and `c` as arguments (in that order), and its return value will be
 *      the combinator's return value.
 * @param {*} b A value that will become `a`'s first argument.
 * @param {*} c A value that will become `a`'s third argument.
 * @param {*} d A value that will become `a`'s second argument.
 * @returns {*} The return value of function `a` when applied to `b`, `d`, and `c`.
 * @alias module:combinators/pure.Cs
 */
const Cs = a => b => c => d => a(b)(d)(c)

module.exports = Cs
