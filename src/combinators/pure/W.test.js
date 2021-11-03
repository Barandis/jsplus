// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { K, S, W } = require('combinators/pure')
const { add, mul } = require('operators')

describe('W combinator', () => {
  it('doubles its second argument', () => {
    expect(W(add)(4)).to.equal(8)
    expect(W(mul)(12)).to.equal(144)
  })
  it('can be constructed from SS(SK)', () => {
    const w = S(S)(S(K))
    expect(w(add)(4)).to.equal(8)
    expect(w(mul)(12)).to.equal(144)
  })
})
