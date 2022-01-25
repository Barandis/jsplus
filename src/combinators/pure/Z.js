// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **Z** combinator. This is the applicative or strict fixed point combinator.
 *
 * This is the famous **Y** combinator, except a version of it that works in a language with
 * eager evaluation. In such languages, executing the regular **Y** combinator results in an
 * infinite loop and therefore an error when the stack runs out of space. The **Z**
 * combinator is a variation of **Y** that works with eager evaluation.
 *
 * | Property              | Value                     |
 * |-----------------------|---------------------------|
 * | Type signature        | `(a -> a) -> a`           |
 * | Lambda representation | `λx.x(λx)`                |
 * | Bird                  | Sage Bird                 |
 *
 * The difference between the **Y** and the **Z** combinators is that the former is useful
 * only in lazy languages, and the latter can be used in strict/eager languages (such as
 * JavaScript). The following discussion applies to both.
 *
 * This combinator is the *fixed-point* combinator. It takes a function, and it produces a
 * new function that, when applied to itself, will return itself. This can be expressed
 * mathematically as
 * ```
 * Z(f) = f(Z(f))
 * ```
 * It turns out that having a fixed point is necessary to producing recursion out of
 * anonymous functions, and it turns out that this is what the **Y** / **Z** combinator is
 * most famous for. (Famous does not mean practical; the use of the combinator for this
 * reason is only necessary if your language doesn't have recursion, and JS does.)
 *
 * Take a factorial function as an example. This can easily be defined recursively like so:
 * ```javascript
 * const factorial = x => x < 1 ? 1 : x * factorial(x - 1)
 * ```
 * The self-reference makes this function recursive, and it's also what makes it useless in
 * the lambda calculus, where all functions are anonymous (i.e., they don't have names) and
 * therefore cannot have references to names in their bodies.
 *
 * To do something like this anonymously, we have to change the function so that it does
 * not reference itself. We do this by instead having it reference a function that is passed
 * in as an argument.
 * ```javascript
 * const anonFact = f => x => x < 1 ? 1 : x * f(x - 1)
 * ```
 * Now the function contains no reference to a named function, merely a reference to a
 * function as parameter `f`. But what is `f` and how can we find it to pass it into this
 * function?
 *
 * That's where **Z** comes in. It turns out that if you modify a recursive function in this
 * way to take the formerly-recursive function as a parameter, the fixed point of that
 * modified function will act just like a recursive function. And so:
 * ```javascript
 * const zfact = Z(anonFact)
 * const f3 = zfact(3)
 * const f5 = zfact(5)
 * const f10 = zfact(10)
 *
 * console.log(f3)  // 6
 * console.log(f5)  // 120
 * console.log(f10) // 3628800
 * ```
 *
 * @param {function} a A function to produce a fixed point for.
 * @returns {function} A function that is the fixed point of `a`.
 * @alias module:combinators/pure.Z
 */
const Z = a => (f => f(f))(f => a(x => f(f)(x)))

module.exports = Z
