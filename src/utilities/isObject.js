// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { toString } = Object.prototype

/**
 * Determines whether a value is a plain object.
 *
 * This function returns `false` if the value is any other sort of built-in object (such as
 * an array or a string). It also returns `false` for any object that is created by a
 * constructor that is not `Object`'s constructor, meaning that "instances" of custom
 * "classes" will return `false`. Therefore it's only going to return `true` for literal
 * objects or those created with `Object.create()`.
 *
 * @param {*} x The value being tested to see if it is a plain object.
 * @return {boolean} Either `true` if the value is a plain object or `false` if it is not.
 * @alias module:utilities.isObject
 */
function isObject(x) {
  // This check is true on all objects, but also on all objects created by custom
  // constructors (which we don't want). Note that in ES2015 and later, objects created by
  // using `new` on a `class` will return false directly right here.
  if (toString.call(x) !== '[object Object]') {
    return false
  }

  // The Object prototype itself passes, along with objects created without a prototype from
  // Object.create(null);
  const proto = Object.getPrototypeOf(x)
  if (proto === null) {
    return true
  }

  // Check to see whether the constructor of the tested object is the Object constructor,
  const ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor
  return typeof ctor === 'function' && ctor === Object
}

module.exports = isObject
