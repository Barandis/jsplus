// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **R\*** combinator. This is the rotate combinator, once removed.
 *
 * | Property              | Value                                                    |
 * |-----------------------|----------------------------------------------------------|
 * | Type signature        | `(a -> b -> c -> d) -> b -> c -> a -> d`                 |
 * | Lambda representation | `λxyzw.xzwy`                                             |
 * | SK system             | `S(K(S(S(K(S(KS)K))S)(KK)))(S(K(S(S(K(S(KS)K))S)(KK))))` |
 * | BCKW system           | `BC(BC)`                                                 |
 * | Other equivalent      | `C*C*`                                                   |
 * | Bird                  | Robin (once removed)                                     |
 *
 * The **R\*** combinator is related to the **{@link module:combinators/pure.R|R}**
 * combinator in that it rotates its arguments. However, the **R\*** combinator takes *four*
 * arguments rather than three and retains the order of the first argument. This makes it
 * more useful than **R** on the whole because that first argument represents a function
 * whose arguments are all that is rotated, as opposed to **R** where the position of the
 * function itself is rotated.
 *
 * @param {function} a A function of three parameters. `c`, `d`, and `a` become its
 *      arguments and its return value becomes the result of the combinator.
 * @param {*} b A value which becomes the third argument to function `a`.
 * @param {*} c A value which becomes the first argument to function `a`.
 * @param {*} d A value which becomes the second argument to function `a`
 * @returns {*} The return value of function `a` when applied to values `c`, `d`, and `a`.
 * @alias module:combinators/pure.Rs
 */
const Rs = a => b => c => d => a(c)(d)(b)

module.exports = Rs
