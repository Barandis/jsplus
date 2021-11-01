// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **S** combinator. This is the substitution combinator.
 *
 * | Property              | Value                                 |
 * |-----------------------|---------------------------------------|
 * | Type signature        | `(a -> b -> c) -> (a -> b) -> a -> c` |
 * | Lambda representation | `λxyz.xz(yz)`                         |
 * | SK system             | `S`                                   |
 * | BCKW system           | `B(BW)(BBC)`                          |
 * | Bird                  | Starling                              |
 *
 * The idea of substitution comes from the fact that, rather than merely applying `a` to
 * `b`, it first *substitutes* them both by applying a third argument `c` to each of them
 * before performing that application.
 *
 * (In fact, Moses Schönfinkel named this combinator "**S**" in 1924, where the combinator's
 * name in German was *Verschmelzungsfunktion* or "fusion function". The **S** was to avoid
 * confusion with another combinator that he named *Vertauschungsfunktion* ("swap
 * function"); rather than name either of them **V**, he went with the first letters of the
 * roots *schmelzen* and *tauschen*. The latter he called **T**, which Haskell Curry renamed
 * to **C** in 1930. Curry chose to keep **S** though.)
 *
 * The **S** combinator is one of the two primitive combinators of the SK calculus. This
 * means that any possible computation can be performed as sequences of these two
 * combinators.
 *
 * @param {function} a A function of two parameters. It will take as arguments the value `c`
 *      and the return value of function `b`. This function's return value becomes the
 *      return value of the combinator.
 * @param {function} b A function of one parameter. Its argument will be the value `c`, and
 *      its return value will become the second argument of function `a`.
 * @param {*} c A value which becomes the first argument of both function `a` and function
 *      `b`.
 * @returns {*} The value returned by function `a`.
 * @alias module:combinators/pure.S
 */
const S = a => b => c => a(c)(b(c))

module.exports = S
