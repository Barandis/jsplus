// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const K = require('combinators/pure/K')
const S = require('combinators/pure/S')
const W = require('combinators/pure/W')
const add = require('operators/add')
const mul = require('operators/mul')

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
