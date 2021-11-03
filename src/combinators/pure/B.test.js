// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const { B, K, S } = require('combinators/pure')
const { add, mul } = require('operators')

describe('B combinator', () => {
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
