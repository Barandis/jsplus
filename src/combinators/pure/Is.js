// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **I\*** combinator. This is the function application combinator.
 *
 * | Property              | Value                   |
 * |-----------------------|-------------------------|
 * | Type signature        | `(a -> b) -> a -> b`    |
 * | Lambda representation | `λxy.xy`                |
 * | SK system             | `SK(SK)`                |
 * | BCKW system           | `BWK`                   |
 * | Bird                  | Identity (once removed) |
 *
 * The **I\*** combinator represents normal function application. This is known in some
 * literature as the **A** combinator, but this does not appear to be widespread. It fits
 * with the concept in *To Mock a Mockingbird* of starred combinators that represent a
 * combinator's action "once removed", and while **I\*** doesn't appear in that book, other
 * starred combinators that are derived similarly do.
 *
 * @param {function} a A function of one parameter. This will receive `b` as an argument and
 *      its return value becomes the combinator's return value.
 * @param {*} b A value that is given to `a` as its argument.
 * @returns {*} The return value of function `a` when applied to value `b`.
 * @alias module:combinators/pure.Is
 */
const Is = a => b => a(b)

module.exports = Is
