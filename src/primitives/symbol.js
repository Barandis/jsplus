// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Converts a value into a symbol.
 *
 * The value in question will be converted into a string using its `toString` method, and it
 * will be registered in the global Symbol registry under that name. That means if the name
 * already exists in that registry, that symbol will be returned, rather than a new symbol
 * created.
 *
 * Passing no value at all will produce `Symbol("undefined")`.
 *
 * ```javascript
 * console.log(symbol ('test')) // Symbol('test')
 * console.log(symbol (1729))   // Symbol('1729')
 * console.log(symbol (23n))    // Symbol('23')
 * console.log(symbol (true))   // Symbol('true')
 * console.log(symbol ([]))     // Symbol('')
 * console.log(symbol ([14]))   // Symbol('14')
 * console.log(symbol ({}))     // Symbol('[object Object]')
 * console.log(symbol (null))   // Symbol('null')
 * console.log(symbol ())       // Symbol('undefined')
 * ```
 *
 * @param {*} x The value to be converted.
 * @returns {symbol} A symbol representing that value. If the value already existed as a
 *      symbol, that symbol will be returned; otherwise, a new symbol will be created and
 *      returned.
 * @alias module:primitives.symbol
 */
function symbol(x) {
  return Symbol.for(x)
}

module.exports = symbol
