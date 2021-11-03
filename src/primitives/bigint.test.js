// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const bigint = require('primitives/bigint')

describe('bigint', () => {
  it('converts numbers to bigints', () => {
    expect(bigint(0)).to.equal(0n)
    expect(bigint(-23)).to.equal(-23n)
    expect(bigint(1729)).to.equal(1729n)
    expect(bigint(9007199254740991)).to.equal(9007199254740991n)
    expect(bigint(2.7e10)).to.equal(27000000000n)
  })
  it('converts strings to bigints', () => {
    expect(bigint('0')).to.equal(0n)
    expect(bigint('-23')).to.equal(-23n)
    expect(bigint('1729')).to.equal(1729n)
    expect(bigint('9007199254740991')).to.equal(9007199254740991n)
    expect(bigint('18446744073709551616')).to.equal(18446744073709551616n)
  })
  it('converts booleans to bigints', () => {
    expect(bigint(true)).to.equal(1n)
    expect(bigint(false)).to.equal(0n)
  })
  it('converts single-element arrays of numbers to bigints', () => {
    expect(bigint([0])).to.equal(0n)
    expect(bigint([-23])).to.equal(-23n)
    expect(bigint([1729])).to.equal(1729n)
    expect(bigint([9007199254740991])).to.equal(9007199254740991n)
    expect(bigint([2.7e10])).to.equal(27000000000n)
  })
  it('converts single-element arrays of strings to bigints', () => {
    expect(bigint(['0'])).to.equal(0n)
    expect(bigint(['-23'])).to.equal(-23n)
    expect(bigint(['1729'])).to.equal(1729n)
    expect(bigint(['9007199254740991'])).to.equal(9007199254740991n)
    expect(bigint(['18446744073709551616'])).to.equal(18446744073709551616n)
  })
  it('converts empty arrays to 0n', () => {
    expect(bigint([])).to.equal(0n)
  })
})
