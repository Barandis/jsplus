// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **C** combinator. This is the flip or swap combinator.
 *
 * | Property              | Value                          |
 * |-----------------------|--------------------------------|
 * | Type signature        | `(a -> b -> c) -> b -> a -> c` |
 * | Lambda representation | `λxyz.xzy`                     |
 * | SK system             | `S(S(K(S(KS)K))S)(KK)`         |
 * | BCKW system           | `C`                            |
 * | Bird                  | Cardinal                       |
 *
 * The **C** combinator swaps the order of its second and third arguments `b` and `c` and
 * then applies the first argument function `a` to those arguments in their new order.
 *
 * @param {function} a A function of two parameters. This function needs to be able to
 *      accept `c` and `b` as arguments (in that order), and its return value will be the
 *      combinator's return value.
 * @param {*} b A value that will become `a`'s second argument.
 * @param {*} c A value that will become `a`'s first argument.
 * @returns {*} The return value of function `a`.
 * @alias module:combinators/pure.C
 */
const C = a => b => c => a(c)(b)

module.exports = C
