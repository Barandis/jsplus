// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const K = require('./K')
const S = require('./S')
const W = require('./W')

describe('W combinator', () => {
  const add = x => y => x + y
  const mul = x => y => x * y

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
