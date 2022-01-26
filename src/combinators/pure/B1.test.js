// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { B, B1, K, S } = require('combinators/pure')
const { add, mul } = require('operators')

describe('B1 combinator', () => {
  it('composes a binary and a unary function', () => {
    expect(B1(mul(4))(add)(2)(7))
      .to.equal(4 * (2 + 7))
      .and.to.equal(36)
  })
  it('can be constructed from BBB', () => {
    const b1 = B(B)(B)
    expect(b1(mul(4))(add)(2)(7)).to.equal(36)
  })
  it('can be constructed from S(K(S(KS)K))(S(KS)K)', () => {
    const b1 = S(K(S(K(S))(K)))(S(K(S))(K))
    expect(b1(mul(4))(add)(2)(7)).to.equal(36)
  })
})
