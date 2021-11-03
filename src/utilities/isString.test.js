// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const isString = require('utilities/isString')

/* eslint-disable no-unused-expressions */
describe('isString', () => {
  it('works for literal strings', () => {
    expect(isString('hello')).to.be.true
    expect(isString('1729')).to.be.true
    expect(isString('')).to.be.true
  })

  it('works for string objects', () => {
    /* eslint-disable no-new-wrappers */
    expect(isString(String('hello'))).to.be.true
    expect(isString(new String('hello'))).to.be.false
    expect(isString(String())).to.be.true
    expect(isString(new String())).to.be.false
    /* eslint-enable no-new-wrappers */
  })

  it('works for things that are not strings', () => {
    expect(isString([])).to.be.false
    expect(isString(() => {})).to.be.false
    expect(isString({})).to.be.false
    expect(isString(0)).to.be.false
  })

  it('works for null/undefined', () => {
    expect(isString(null)).to.be.false
    expect(isString(undefined)).to.be.false
  })
})
