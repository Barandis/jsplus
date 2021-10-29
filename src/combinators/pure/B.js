// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **B** combinator. This is the composition combinator.
 *
 * | Property              | Value                            |
 * |-----------------------|----------------------------------|
 * | Type signature        | `(a -> b) -> (c -> a) -> c -> b` |
 * | Lambda representation | `λxyz.x(yz)`                     |
 * | SK system             | `S(KS)K`                         |
 * | BCKW system           | `B`                              |
 * | Bird                  | Bluebird                         |
 *
 * The **B** combinator performs the composition of two single-argument functions. This
 * means that the second function (`b`) is applied to an argument, and then the first
 * function (`a`) is applied to that result. This is the basic way of combining two
 * functions into another function that does the same thing as the two component functions
 * being applied in reverse order.
 *
 * As the composition combinator, **B** has equivalent operators in many languages,
 * including `.` in Haskell, `∘` in APL, and `&` in J. Concatenative languages (such as
 * Forth and Factor) are called concatenative because composition is done by simply naming
 * two functions next to each other ("concatenating" the functions).
 *
 * @param {function(U):V} a A function of one argument of type U that returns a result of
 *      type V. This return value becomes the return value of the entire combinator.
 * @param {function(T):U} b A function of one argument of type T that returns a result of
 *      type U. This return value becomes the argument for function `a`.
 * @param {T} c A value of type T. This value becomes the argument for function `b`.
 * @returns {V} A value of type V, which is returned by function `a`.
 * @alias module:combinators/pure.B
 */
const B = a => b => c => a(b(c))

module.exports = B
