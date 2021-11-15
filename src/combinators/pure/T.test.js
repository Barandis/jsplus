// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { C, K, S, T, W } = require('combinators/pure')
const { add, div } = require('operators')

describe('T combinator', () => {
  it('applies its second argument to its first', () => {
    expect(T(3)(add(4))).to.equal(7)
    expect(T(2)(div(7))).to.equal(3.5)
  })
  it('can be constructed from S(K(S(SKK)))K', () => {
    const t = S(K(S(S(K)(K))))(K)
    expect(t(3)(add(4))).to.equal(7)
    expect(t(2)(div(7))).to.equal(3.5)
  })
  it('can be constructed from C(WK)', () => {
    const t = C(W(K))
    expect(t(3)(add(4))).to.equal(7)
    expect(t(2)(div(7))).to.equal(3.5)
  })
})
