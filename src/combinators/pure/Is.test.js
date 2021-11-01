// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const B = require('combinators/pure/B')
const Is = require('combinators/pure/Is')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')
const W = require('combinators/pure/W')

const add = a => b => a + b
const div = a => b => a / b

describe('I* combinator', () => {
  it('applies its first argument to its second', () => {
    expect(Is(add(4))(3)).to.equal(7)
    expect(Is(div(7))(2)).to.equal(3.5)
  })
  it('can be constructed from SK(SK)', () => {
    const is = S(K)(S(K))
    expect(is(add(4))(3)).to.equal(7)
    expect(is(div(7))(2)).to.equal(3.5)
  })
  it('can be constructed from BWK', () => {
    const is = B(W)(K)
    expect(is(add(4))(3)).to.equal(7)
    expect(is(div(7))(2)).to.equal(3.5)
  })
})
