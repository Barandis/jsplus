// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **A** combinator. This is the function application combinator.
 *
 * | Property              | Value                |
 * |-----------------------|----------------------|
 * | Type signature        | `(a -> b) -> a -> b` |
 * | Lambda representation | `λab.ab`             |
 * | SK system             | `SK(SK)`             |
 *
 * The **A** combinator represents normal function application. There is some question about
 * whether this is properly considered a combinator in the first place; function application
 * is a basic operation of the lambda calculus, and it doesn't even get a bird in *To Mock a
 * Mockingbird*. I have included it on the strength of a) it's in some literature, and b) it
 * has a legitimate SK representation.
 *
 * @param {function} a A function of one parameter. This will receive `b` as an argument and
 *      its return value becomes the combinator's return value.
 * @param {*} b A value that is given to `a` as its argument.
 * @returns {*} The return value of function `a` when applied to value `b`.
 * @alias module:combinators/pure.A
 */
const A = a => b => a(b)

module.exports = A
