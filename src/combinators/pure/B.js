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
 * The **B** combinator performs the composition of two single-parameter functions. This
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
 * @param {function} a A function of one parameter. This function accepts the return value
 *      from `b`, and this function's return value becomes the return value of the
 *      combinator.
 * @param {function} b A function of one parameter. This function takes `c` as its argument,
 *      and its return value becomes the argument to `a`.
 * @param {*} c A value that becomes `b`'s argument.
 * @returns {*} The return value of function `a`.
 * @alias module:combinators/pure.B
 */
const B = a => b => c => a(b(c))

module.exports = B
