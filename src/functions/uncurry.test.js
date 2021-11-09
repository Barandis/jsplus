// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { uncurry } = require('functions')

describe('uncurry', () => {
  it('uncurries to 0 parameters', () => {
    const fn = () => 1729
    const result = uncurry(fn, 0)
    expect(result()).to.equal(1729)
  })
  it('uncurries to 1 parameter', () => {
    const fn = a => a
    const result = uncurry(fn, 1)
    expect(result(1729)).to.equal(1729)
  })
  it('uncurries to 2 parameters', () => {
    const fn = a => b => a + b
    const result = uncurry(fn, 2)
    expect(result(7, 9)).to.equal(16)
  })
  it('uncurries to 3 parameters', () => {
    const fn = a => b => c => a + b + c
    const result = uncurry(fn, 3)
    expect(result(7, 9, 11)).to.equal(27)
  })
  it('uncurries to 4 parameters', () => {
    const fn = a => b => c => d => a + b + c + d
    const result = uncurry(fn, 4)
    expect(result(7, 9, 11, 13)).to.equal(40)
  })
  it('uncurries to 5 parameters', () => {
    const fn = a => b => c => d => e => a + b + c + d + e
    const result = uncurry(fn, 5)
    expect(result(7, 9, 11, 13, 15)).to.equal(55)
  })
  it('uncurries to 6 parameters', () => {
    const fn = a => b => c => d => e => f => a + b + c + d + e + f
    const result = uncurry(fn, 6)
    expect(result(7, 9, 11, 13, 15, 17)).to.equal(72)
  })
  it('ignores extra parameters', () => {
    const fn = a => b => a + b
    const result = uncurry(fn, 2)
    expect(result(1, 2, 3, 4)).to.equal(3)
  })
  it('passes `undefined` in for any missing args', () => {
    const fn = a => b => c => d => [a, b, c, d]
    const result = uncurry(fn, 4)
    expect(result(1, 2)).to.deep.equal([1, 2, undefined, undefined])
  })
})
