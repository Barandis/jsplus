// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { isArray } = require('utilities')

/* eslint-disable no-unused-expressions */
describe('isArray', () => {
  it('works for literal arrays', () => {
    expect(isArray([1, 2, 3])).to.be.true
    expect(isArray([])).to.be.true
  })

  it('works for array objects', () => {
    const array = new Array(3)
    array.push(1, 2, 3)
    expect(isArray(array)).to.be.true
    // eslint-disable-next-line no-array-constructor
    expect(isArray(new Array())).to.be.true
  })

  it('works for things that are not arrays', () => {
    expect(isArray(() => {})).to.be.false
    expect(isArray({})).to.be.false
    expect(isArray(0)).to.be.false
    expect(isArray('')).to.be.false
  })

  it('works for null/undefined', () => {
    expect(isArray(null)).to.be.false
    expect(isArray(undefined)).to.be.false
  })
})
