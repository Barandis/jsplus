// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const curry = require('functions/curry')

/**
 * A curried function version of the `?.[]` optional chaining operator.
 *
 * The first argument is the object upon which a property will be looked up. The second
 * argument is a property name (a string or a symbol) or an index (a number). The function
 * will return either the value of a property with that name, the value of an array at the
 * given index, or `undefined` if the first argument itself is `null` or `undefined`.
 *
 * If you need to partially apply the property name/index, then use
 * `{@link module:combinators.swap|swap}` in conjunction with `opt`. See the examples
 * below.
 *
 * Note that this function only performs optional chaining property access. It does not do
 * optional chaining function application (`?.()`).
 *
 * ```javascript
 * const a = [1, 2, 3, 4, 5]
 * const b = null
 *
 * console.log(a[1])             // 2
 * console.log(opt(a, 1))        // 2
 * console.log(opt(a)(1))        // 2
 *
 * console.log(a.length)         // 5
 * console.log(opt(a, 'length')) // 5
 *
 * console.log(b?.length)        // undefined
 * console.log(opt(b, 'length')) // undefined
 *
 * const count = swap(opt, 'length')
 * console.log(count(a))         // 5
 * console.log(count(b))         // undefined
 * ```
 *
 * @param {object|null} x The object to look up the property name or index on.
 * @param {string|symbol|number} y The name of the property or the index to look up.
 * @returns {*} The value of index `y` or the property with the name `y` in `x`. If `x` is
 *      `null` or `undefined`, then `undefined` is returned.
 * @alias module:operators.opt
 */
function opt(x, y) {
  return x?.[y]
}

module.exports = curry(opt)
