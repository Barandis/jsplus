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
 * @param {Function(T,U):V} a A function of two arguments of types T and U which returns a
 *      value of type V. This return value is the return value of the entire combinator.
 * @param {function(T):U} b A function of one argument of type T which returns a value of
 *      type U. This return value is passed into function `a`.
 * @param {T} c A value of type T, which is passed into both functions `a` and `b`.
 * @returns {V} A value of type V, the type returned by function `a`.
 * @alias module:combinators/pure.S
 */
const S = a => b => c => a(c)(b(c))

module.exports = S
