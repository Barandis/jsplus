// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **S'** combinator.
 *
 * | Property              | Value                                             |
 * |-----------------------|---------------------------------------------------|
 * | Type signature        | `(b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d` |
 * | Lambda representation | `λxyzw.x(yw)(zw)`                                 |
 * | BCKW System           | `B(B(B(BW)(BBC)))B`                               |
 * | Bird                  | Starling prime                                    |
 *
 * The **S'** combinator applies both its second and third arguments separately to its
 * fourth argument, then it applies its first argument to the two results. This has the
 * effect of passing an argument to two different unary functions and then combining the
 * results with a binary function.
 *
 * This is similar to the **{@link module:combinators/pure.P|P}** combinator, except that
 * instead of using two different values applied to one unary function, it uses one value
 * applied to two different unary functions.
 *
 * This is a commonly seen combinator in functional and array languages. It is `liftA2` in
 * Haskell and is represented by the fork construction that originated in J and worked its
 * way into some modern dialects of APL. As such it's very useful in point-free programming.
 *
 * @param {function} a A function of two parameters. It's applied to the return values of
 *      the applications of functions `b` and `c`. Its return value becomes the return value
 *      of the combinator.
 * @param {function} b A function of one parameter. It's applied to the value `d` to produce
 *      one of the arguments for function `a`.
 * @param {function} c A function of one parameter. It's applied to the value `d` to produce
 *      one of the arguments for function `a`.
 * @param {*} d A value to which functions `b` and `c` are applied.
 * @returns {*} The result of function `a` being applied to the results of function `b`'s
 *      and function `c`'s applications to value `d`.
 * @alias module:combinators/pure.Sp
 */
const Sp = a => b => c => d => a(b(d))(c(d))

module.exports = Sp
