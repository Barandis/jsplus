// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const curry2 = require('functions/curry2')

describe('curry2', () => {
  const sum = curry2((a, b) => a + b)

  it('works when passing single arguments', () => {
    const result = sum(1)(2)
    expect(result).to.equal(3)
  })
  it('returns a function when passed only 1 argument', () => {
    const sum1 = sum(1)
    expect(sum1(2)).to.equal(3)
  })
})
