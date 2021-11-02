// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `[]` property access operator.
 *
 * The first argument is the object upon which a property will be looked up. The second
 * argument is a property name (a string or a symbol) or an index (a number). The function
 * will return either the value of a property with that name or the value of an array at the
 * given index.
 *
 * If you need to partially apply the property name/index, then use
 * `{@link module:combinators.swap|swap}` in conjunction with `prop`. See the examples
 * below.
 *
 * ```javascript
 * const a = [1, 2, 3, 4, 5]
 *
 * console.log(a[1])              // 2
 * console.log(prop(a, 1))        // 2
 * console.log(prop(a)(1))        // 2
 *
 * console.log(a.length)          // 5
 * console.log(prop(a, 'length')) // 5
 *
 * const count = swap(prop, 'length')
 * console.log(count(a))          // 5
 * ```
 *
 * @param {object} x The object to look up the property name or index on.
 * @param {string|symbol|number} y The name of the property or the index to look up.
 * @returns {*} The value of index `y` or the property with the name `y` in `x`.
 * @alias module:operators.prop
 */
function prop(x, y) {
  return x[y]
}

module.exports = curry(prop)
