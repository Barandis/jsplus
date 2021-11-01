// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * The **K** combinator. This is the constant combinator.
 *
 * | Property              | Value         |
 * |-----------------------|---------------|
 * | Type signature        | `a -> b -> a` |
 * | Lambda representation | `λxy.x`       |
 * | SK system             | `K`           |
 * | BCKW system           | `K`           |
 * | Bird                  | Kestrel       |
 *
 * The **K** combinator produces functions (closures) that return the **K** combinator's
 * first argument, no matter what arguments are passed to the produced function.
 *
 * For this reason the type signature given above doesn't really match the JavaScript
 * implementation's type signature. There is no equivalent to the `b` parameter in the type
 * signature above; it's not considered good style to include a parameter that doesn't get
 * referenced in the body of the function. Besides, the produced function, like all
 * JavaScript functions, can take arbitrary arguments even if the parameter list is empty.
 * These arguments are simply ignored, which is exactly the desired effect anyway.
 *
 * @param {*} a A value that will be returned by the returned constant function.
 * @returns {function} A function which ignores its argument(s) and returns `a`.
 * @alias module:combinators/pure.K
 */
const K = a => () => a

module.exports = K
