// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const curry4 = require('functions/curry4')

describe('curry4', () => {
  const sum = curry4((a, b, c, d) => a + b + c + d)

  it('works when passing single arguments', () => {
    const result = sum(1)(2)(3)(4)
    expect(result).to.equal(10)
  })
  it('returns a function when passed only 3 arguments', () => {
    const sum123 = sum(1)(2)(3)
    expect(sum123(4)).to.equal(10)
  })
  it('returns a function when passed only 2 arguments', () => {
    const sum12 = sum(1)(2)
    expect(sum12(3)(4)).to.equal(10)
  })
  it('returns a function when passed only 1 argument', () => {
    const sum1 = sum(1)
    expect(sum1(2)(3)(4)).to.equal(10)
  })
})
