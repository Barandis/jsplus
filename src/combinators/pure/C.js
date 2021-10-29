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
 * @param {function(U,T): V} a A function of two arguments of types U and T which returns a
 *      value of type V. This return value is the return value of the full combinator.
 * @param {T} b A value of type T. This becomes the second argument to function `a`.
 * @param {U} c A value of type U. This becomes the first argument to function `a`.
 * @returns {V} The return value of function `a`.
 * @alias module:combinators/pure.C
 */
const C = a => b => c => a(c)(b)

module.exports = C
