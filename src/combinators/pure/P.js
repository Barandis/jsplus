// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **P** combinator.
 *
 * | Property              | Value                                      |
 * |-----------------------|--------------------------------------------|
 * | Type signature        | `(a -> a -> b) -> (c -> a) -> c -> c -> b` |
 * | Lambda representation | `λxyzw.x(yz)(yw)`                          |
 * | BCKW System           | `C(B(B(BW)(BBC))(B(BC)(BB(BB))))(BWK)`     |
 * | Bird                  | Psi bird                                   |
 *
 * The **P** combinator applies its second argument separately to its third and fourth
 * arguments, and then it applies its first argument to the two results. This has the effect
 * of passing two arguments, separately, to a unary function and then combining the results
 * with a binary function.
 *
 * This is similar to the **{@link module:combinators/pure.Sp|S'}** combinator, except that
 * instead of using one value applied to two different unary functions, it uses two
 * different values applied to a single unary function.
 *
 * This is called the **Ψ** (psi) combinator in many places, and it's not unusual for a
 * function that performs the operation to be called `psi`. While it does not appear in *To
 * Mock a Mockingbird*, it's often called the "psi bird".
 *
 * @param {function} a A function of two parameters. It's applied to the return values of
 *      both applications of function `b`. Its return value becomes the return value of the
 *      combinator.
 * @param {function} b A function of one parameter. It's applied separately to the values
 *      `c` and `d`, and those return values are provided as arguments to function `a`.
 * @param {*} c A value to which function `b` is applied.
 * @param {*} d A value to which function `b` is applied.
 * @returns {*} The result of function `a` being applied to the results of function `b`'s
 *      applications to each of `c` and `d`.
 * @alias module:combinators/pure.P
 */
const P = a => b => c => d => a(b(c))(b(d))

module.exports = P
