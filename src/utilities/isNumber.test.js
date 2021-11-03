// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const isNumber = require('utilities/isNumber')

/* eslint-disable no-unused-expressions */
describe('isNumber', () => {
  it('works for number literals', () => {
    expect(isNumber(1729)).to.be.true
    expect(isNumber(27.42)).to.be.true
    expect(isNumber(6.022e23)).to.be.true
    expect(isNumber(0xff)).to.be.true
    expect(isNumber(0)).to.be.true
  })

  it('works for number objects', () => {
    /* eslint-disable no-new-wrappers */
    expect(isNumber(new Number(1729))).to.be.false
    expect(isNumber(Number('27.42'))).to.be.true
    expect(isNumber(new Number('6.022e23'))).to.be.false
    expect(isNumber(Number(0xff))).to.be.true
    expect(isNumber(new Number())).to.be.false
    /* eslint-enable no-new-wrappers */
  })

  it('works for numeric strings', () => {
    expect(isNumber('1729')).to.be.false
    expect(isNumber('0')).to.be.false
  })

  it('works for infinite numbers', () => {
    expect(isNumber(NaN)).to.be.false
    expect(isNumber(Infinity)).to.be.false
    expect(isNumber(-Infinity)).to.be.false
  })

  it('works for things that are not numbers', () => {
    expect(isNumber([])).to.be.false
    expect(isNumber(() => {})).to.be.false
    expect(isNumber({})).to.be.false
    expect(isNumber('')).to.be.false
  })

  it('works for null/undefined', () => {
    expect(isNumber(null)).to.be.false
    expect(isNumber(undefined)).to.be.false
  })
})
