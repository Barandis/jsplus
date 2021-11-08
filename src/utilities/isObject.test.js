// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { isObject } = require('utilities')

/* eslint-disable no-unused-expressions */
describe('isObject', () => {
  it('works for object literals', () => {
    expect(isObject({ a: 1, b: 2 })).to.be.true
    expect(isObject({})).to.be.true
  })

  it('works for Object objects', () => {
    // eslint-disable-next-line no-new-object
    const obj = new Object()
    obj.a = 1
    obj.b = 2
    expect(isObject(obj)).to.be.true
  })

  it('works for things that are not objects', () => {
    expect(isObject([])).to.be.false
    expect(isObject(() => {})).to.be.false
    expect(isObject(0)).to.be.false
    expect(isObject('')).to.be.false
  })

  it('works for objects that are assigned another type', () => {
    // eslint-disable-next-line no-array-constructor
    expect(isObject(new Array())).to.be.false
    // eslint-disable-next-line no-new-func
    expect(isObject(new Function('a', 'b', 'return a + b'))).to.be.false
    // eslint-disable-next-line no-new-wrappers
    expect(isObject(new Number(0))).to.be.false
    // eslint-disable-next-line no-new-wrappers
    expect(isObject(new String())).to.be.false
  })

  it('works for classes', () => {
    class Test {}
    expect(isObject(new Test())).to.be.false
  })

  it('works for objects without prototypes', () => {
    const obj = Object.create(null)
    obj.a = 1
    obj.b = 2
    expect(isObject(obj)).to.be.true
    expect(isObject(Object.prototype)).to.be.true
  })

  it('works for null/undefined', () => {
    expect(isObject(null)).to.be.false
    expect(isObject(undefined)).to.be.false
  })
})
