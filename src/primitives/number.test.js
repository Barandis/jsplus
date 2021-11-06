// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const number = require('primitives/number')

describe('number', () => {
  it('converts numeric strings to numbers', () => {
    expect(number('0')).to.equal(0)
    expect(number('-23')).to.equal(-23)
    expect(number('1729')).to.equal(1729)
    expect(number('2.7e10')).to.equal(2.7e10)
    expect(number('9007199254740991')).to.equal(9007199254740991)
  })
  it('converts booleans to numbers', () => {
    expect(number(true)).to.equal(1)
    expect(number(false)).to.equal(0)
  })
  it('converts bigints to numbers', () => {
    expect(number(0n)).to.equal(0)
    expect(number(-23n)).to.equal(-23)
    expect(number(1729n)).to.equal(1729)
    expect(number(9007199254740991n)).to.equal(9007199254740991)
    expect(number(27000000000n)).to.equal(2.7e10)
  })
  it('converts null to 0', () => {
    expect(number(null)).to.equal(0)
  })
  it('converts zero- or one-element numeric string arrays to numbers', () => {
    expect(number([])).to.equal(0)
    expect(number(['0'])).to.equal(0)
    expect(number(['-23'])).to.equal(-23)
    expect(number(['1729'])).to.equal(1729)
    expect(number(['2.7e10'])).to.equal(2.7e10)
    expect(number(['9007199254740991'])).to.equal(9007199254740991)
  })
  it('converts anything else to NaN', () => {
    /* eslint-disable no-unused-expressions */
    expect(number('oops')).to.be.NaN
    expect(number({})).to.be.NaN
    expect(number([1, 2])).to.be.NaN
    expect(number(undefined)).to.be.NaN
    /* eslint-enable no-unused-expressions */
  })
})
