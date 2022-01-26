// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')
const curry4 = require('functions/curry4')

/**
 * Composes a binary function with a unary function.
 *
 * This is in every way like `{@link module:combinators.compose|compose}` except in that the
 * first executed function (`g`) accepts two parameters rather than one. This function can
 * be curried or uncurried. It is an implementation of the
 * **{@link module:combinators/pure.B1|B₁}** combinator.
 *
 * This function is useful especially when dealing with binary operator functions, as in
 * this example taken straight from the `{@link module:combinators.on|on}` documentation.
 *
 *
 * ```javascript
 * const size = prop ('length')
 * const compare = compose2 (rotr (cond) ('second') ('first')) (lt)
 * const longest = on (compare) (size)
 *
 * const ex1 = longest ([1, 2, 3]) ([1, 2, 3, 4])
 * const ex2 = longest ([1, 2, 3]) ([1, 2])
 *
 * console.log(ex1) // "second"
 * console.log(ex2) // "first"
 * ```
 *
 * The `compare` function in this example starts with a function (`lt`) that takes two
 * arguments and returns a boolean. That boolean is then passed to `rotr (cond) ('second')
 * ('first')`, which is a single argument function equivalent to `a => a ? 'second' :
 * 'first'` (the `rotr` combinator changes the order of arguments to `cond` by making the
 * conditional become the final argument).
 *
 * @param {function} f A single-argument function that is applied to the result from
 *    function `g`.
 * @param {function} g A two-argument function that is applied to `x` and `y`.
 * @param {*} x The first argument to function `g`.
 * @param {*} y The second argument to function `g`.
 * @returns {*} The return value of function `f`.
 * @alias module:combinators.compose2
 */
function compose2(f, g, x, y) {
  return f(curry(g)(x)(y))
}

module.exports = curry4(compose2)
