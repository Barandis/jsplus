// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const { B, C, K, R, S, T, W } = require('combinators/pure')
const { div, sub } = require('operators')

describe('R combinator', () => {
  it('rotates its arguments once to the left', () => {
    expect(R(3)(sub)(4)).to.equal(1)
    expect(R(2)(div)(7)).to.equal(3.5)
  })
  it('can be constructed from S(K(S(KS)K))(S(K(S(SKK)))K)', () => {
    const r = S(K(S(K(S))(K)))(S(K(S(S(K)(K))))(K))
    expect(r(3)(sub)(4)).to.equal(1)
    expect(r(2)(div)(7)).to.equal(3.5)
  })
  it('can be constructed from BB(C(WK))', () => {
    const r = B(B)(C(W(K)))
    expect(r(3)(sub)(4)).to.equal(1)
    expect(r(2)(div)(7)).to.equal(3.5)
  })
  it('can be constructed from BBT', () => {
    const r = B(B)(T)
    expect(r(3)(sub)(4)).to.equal(1)
    expect(r(2)(div)(7)).to.equal(3.5)
  })
})
