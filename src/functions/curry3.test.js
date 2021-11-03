// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const curry3 = require('functions/curry3')

describe('curry3', () => {
  const sum = curry3((a, b, c) => a + b + c)

  it('works when passing single arguments', () => {
    const result = sum(1)(2)(3)
    expect(result).to.equal(6)
  })
  it('returns a function when passed only 2 arguments', () => {
    const sum12 = sum(1)(2)
    expect(sum12(3)).to.equal(6)
  })
  it('returns a function when passed only 1 argument', () => {
    const sum1 = sum(1)
    expect(sum1(2)(3)).to.equal(6)
  })
})
