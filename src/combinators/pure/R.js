// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **R** combinator. This is the rotate combinator.
 *
 * | Property              | Value                          |
 * |-----------------------|--------------------------------|
 * | Type signature        | `a -> (b -> a -> c) -> b -> c` |
 * | Lambda representation | `λxyz.yzx`                     |
 * | SK system             | `S(K(S(KS)K))(S(K(S(SKK)))K)`  |
 * | BCKW system           | `BB(C(WK))`                    |
 * | Other equivalent      | `BBT`                          |
 * | Bird                  | Robin                          |
 *
 * The **R** combinator rotates its arguments to the left before application so that the
 * second one is applied to the third and first, in that order.
 *
 * @param {*} a A value which becomes the second argument to function `b`.
 * @param {function} b A function of two parameters. `c` and `a` become its arguments and
 *      its return value becomes the result of the combinator.
 * @param {*} c A value which becomes the first argument to function `b`.
 * @returns {*} The return value of function `b` when applied to values `c` and `a`.
 * @alias module:combinators/pure.R
 */
const R = a => b => c => b(c)(a)

module.exports = R
