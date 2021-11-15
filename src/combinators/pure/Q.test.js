// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { B, C, K, Q, S } = require('combinators/pure')
const { add, mul } = require('operators')

describe('B combinator', () => {
  it('composes single-argument functions left-to-right', () => {
    expect(Q(mul(4))(add(2))(7))
      .to.equal(4 * 7 + 2)
      .and.to.equal(30)
  })
  it('can be constructed from S(K(S(S(KS)K)))K', () => {
    const q = S(K(S(S(K(S))(K))))(K)
    expect(q(mul(4))(add(2))(7)).to.equal(30)
  })

  it('can be constructed from CB', () => {
    const q = C(B)
    expect(q(mul(4))(add(2))(7)).to.equal(30)
  })
})
