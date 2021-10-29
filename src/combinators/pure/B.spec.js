// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/common')
const B = require('./B')
const K = require('./K')
const S = require('./S')

describe('B combinator', () => {
  const mul = x => y => x * y
  const add = x => y => x + y

  it('composes single-argument functions', () => {
    expect(B(mul(4))(add(2))(7))
      .to.equal(4 * (2 + 7))
      .and.to.equal(36)
  })
  it('can be constructed from S(KS)K', () => {
    const b = S(K(S))(K)
    expect(b(mul(4))(add(2))(7)).to.equal(36)
  })
})
