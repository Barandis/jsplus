// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **I** combinator. This is the identity combinator.
 *
 * | Property              | Value         |
 * |-----------------------|---------------|
 * | Type signature        | `a -> a`      |
 * | Lambda representation | `λx.x`        |
 * | SK system             | `SKK`         |
 * | BCKW system           | `WK`          |
 * | Bird                  | Identity bird |
 *
 * The **I** combinator simply returns whatever value is passed to it.
 *
 * @param {T} a A value of type T.
 * @returns {T} The same value that was passed into the combinator.
 * @alias module:combinators/pure.I
 */
const I = a => a

module.exports = I
