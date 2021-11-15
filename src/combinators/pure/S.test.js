// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { B, C, I, K, S, W } = require('combinators/pure')
const { add, mul } = require('operators')

describe('S combinator', () => {
  it('applies its first two arguments to its third, and then applies the results', () => {
    expect(S(mul)(add(1))(4))
      .to.equal(4 * (4 + 1))
      .and.to.equal(20)
  })
  it('returns the second argument when applied to K', () => {
    expect(S(K)(S)(K)).to.equal(K)
    expect(S(K)(S)(I)).to.equal(I)
  })
  it('applies its first argument to itself when applied to I and I', () => {
    expect(S(I)(I)(I)).to.equal(I)
    expect(S(I)(I)(K)(I)).to.equal(K(K)(I))
  })
  it('can be constructed from B(BW)(BBC)', () => {
    const s = B(B(W))(B(B)(C))
    expect(s(K)(S)(K)).to.equal(K)
    expect(s(K)(S)(I)).to.equal(I)
  })
})
