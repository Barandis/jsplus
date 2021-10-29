// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **W** combinator. This is the duplicate combinator.
 *
 * | Property              | Value                     |
 * |-----------------------|---------------------------|
 * | Type signature        | `(a -> a -> b) -> a -> b` |
 * | Lambda representation | `λxy.xyy`                 |
 * | SK system             | `SS(SK)`                  |
 * | BCKW system           | `W`                       |
 * | Bird                  | Warbler                   |
 *
 * The **W** combinator duplicates its second argument `b` and then applies its first
 * argument `a` to both instances of `b`.
 *
 * @param {function(T,T):U} a A function of two arguments, both of type T, which returns a
 *      value of type U. This return value becomes the return value of the full combinator.
 * @param {T} b A value of type T. This value is duplicated and passed (twice) to function
 *      `a`.
 * @returns {U} The result of function `a` when applied to `b` twice.
 * @alias module:combinators/pure.W
 */
const W = a => b => a(b)(b)

module.exports = W
