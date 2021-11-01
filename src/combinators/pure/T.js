// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **T** combinator. This is commonly known as the thrush combinator.
 *
 * | Property              | Value                |
 * |-----------------------|----------------------|
 * | Type signature        | `a -> (a -> b) -> b` |
 * | Lambda representation | `λxy.yx`             |
 * | SK system             | `S(K(S(SKK)))K`      |
 * | BCKW system           | `C(WK)`              |
 * | Bird                  | Thrush               |
 *
 * The **T** combinator reverses function application, applying the function `b` to the
 * value `a`. This is a not-uncommon operation, and unlike many combinators, that operation
 * has adopted the bird name in many languages; i.e., both Haskell and Racket have a
 * `thrush` function.
 *
 * @param {*} a A value which gets passed to function `b`.
 * @param {function} b A function of one parameter. This gets applied to value `a` and the
 *      return value becomes the return value of the combinator.
 * @returns {*} The value returned from applying function `b` to value `a`.
 * @alias module:combinators/pure.T
 */
const T = a => b => b(a)

module.exports = T
