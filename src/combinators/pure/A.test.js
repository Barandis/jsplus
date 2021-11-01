// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const A = require('combinators/pure/A')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')

const add = a => b => a + b
const div = a => b => a / b

describe('A combinator', () => {
  it('applies its first argument to its second', () => {
    expect(A(add(4))(3)).to.equal(7)
    expect(A(div(7))(2)).to.equal(3.5)
  })
  it('can be constructed from SK(SK)', () => {
    const a = S(K)(S(K))
    expect(a(add(4))(3)).to.equal(7)
    expect(a(div(7))(2)).to.equal(3.5)
  })
})
