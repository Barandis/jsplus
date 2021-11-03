// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const curry5 = require('functions/curry5')

describe('curry5', () => {
  const sum = curry5((a, b, c, d, e) => a + b + c + d + e)

  it('works when passing single arguments', () => {
    const result = sum(1)(2)(3)(4)(5)
    expect(result).to.equal(15)
  })
  it('returns a function when passed only 4 arguments', () => {
    const sum1234 = sum(1)(2)(3)(4)
    expect(sum1234(5)).to.equal(15)
  })
  it('returns a function when passed only 3 arguments', () => {
    const sum123 = sum(1)(2)(3)
    expect(sum123(4)(5)).to.equal(15)
  })
  it('returns a function when passed only 2 arguments', () => {
    const sum12 = sum(1)(2)
    expect(sum12(3)(4)(5)).to.equal(15)
  })
  it('returns a function when passed only 1 argument', () => {
    const sum1 = sum(1)
    expect(sum1(2)(3)(4)(5)).to.equal(15)
  })
})
