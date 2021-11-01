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
 * @param {function} a A function of two parameters. It will receive value `b` as both
 *      arguments, and its return value will be the return value for the combinator.
 * @param {*} b A value of type T. This value is duplicated and passed (twice) to function
 *      `a`.
 * @returns {*} The result of function `a` when applied to `b` twice.
 * @alias module:combinators/pure.W
 */
const W = a => b => a(b)(b)

module.exports = W
