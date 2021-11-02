// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const Cs = require('combinators/pure/Cs')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')

describe('C* combinator', () => {
  const sub = x => y => z => x + y - z
  const div = x => y => z => (x * y) / z

  it('flips the order of its final two arguments', () => {
    expect(Cs(sub)(4)(3)(2)).to.equal(3)
    expect(Cs(div)(12)(2)(6)).to.equal(36)
  })
  it('can be constructed from S(K(S(S(K(S(KS)K))S)(KK)))', () => {
    const cs = S(K(S(S(K(S(K(S))(K)))(S))(K(K))))
    expect(cs(sub)(4)(3)(2)).to.equal(3)
    expect(cs(div)(12)(2)(6)).to.equal(36)
  })
  it('can be constructed from BC', () => {
    const cs = B(C)
    expect(cs(sub)(4)(3)(2)).to.equal(3)
    expect(cs(div)(12)(2)(6)).to.equal(36)
  })
})
