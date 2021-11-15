// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { B, C, Cs, K, S } = require('combinators/pure')

const sub = x => y => z => x + y - z
const div = x => y => z => (x * y) / z

describe('C* combinator', () => {
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
