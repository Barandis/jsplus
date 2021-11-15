// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry2 = require('functions/curry2')

/**
 * A curried function version of the `[]` property access operator, but in reverse order.
 *
 * The first argument in this case is the name of the property or the numerical index (if
 * the object is an array), and the second is the object that property/index is being looked
 * up on. This is the opposite order of `{@link module:operators.propOf|propOf}` and is
 * included because it is very common to look up a property of a particular name and have
 * the object vary.
 *
 * As an example, this is a function that determines the length of an array argument, using
 * the regular-order `propOf`:
 * ```javascript
 * const length = swap (propOf) ('length')
 * ```
 * while this is the same function using the reverse-order `prop`:
 * ```javascript
 * const length = prop ('length')
 * ```
 * Not requiring `{@link module:combinators.swap|swap}` simplifies the definition, and since
 * this is an extremely common pattern, this extra function has been provided for it.
 *
 * The other common situation where `swap` gets used very often is in comparison operators,
 * but reverse-order operators already exist. For example, `swap (lt) (3)` is the same as
 * `ge (3)`.
 *
 * @param {string|symbol|number} x The name of the property or the index to look up.
 * @param {object} y The object to look up the property name or index on.
 * @returns {*} The value of index `x` or the property with the name `x` in `y`.
 * @alias module:operators.prop
 */
function prop(x, y) {
  return y[x]
}

module.exports = curry2(prop)
