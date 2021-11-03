// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const { B, C, Cs, K, Rs, S } = require('combinators/pure')

const sub = x => y => z => x - y - z
const div = x => y => z => x / y / z

describe('R* combinator', () => {
  it('rotates the arguments of its function to the left', () => {
    expect(Rs(sub)(3)(4)(5)).to.equal(-4)
    expect(Rs(div)(2)(12)(3)).to.equal(2)
  })
  it('can be constructed from S(K(S(S(K(S(KS)K))S)(KK)))(S(K(S(S(K(S(KS)K))S)(KK))))', () => {
    const rs = S(K(S(S(K(S(K(S))(K)))(S))(K(K))))(S(K(S(S(K(S(K(S))(K)))(S))(K(K)))))
    expect(rs(sub)(3)(4)(5)).to.equal(-4)
    expect(rs(div)(2)(12)(3)).to.equal(2)
  })
  it('can be constructed from BC(BC)', () => {
    const rs = B(C)(B(C))
    expect(rs(sub)(3)(4)(5)).to.equal(-4)
    expect(rs(div)(2)(12)(3)).to.equal(2)
  })
  it('can be constructed from C*C*', () => {
    const rs = Cs(Cs)
    expect(rs(sub)(3)(4)(5)).to.equal(-4)
    expect(rs(div)(2)(12)(3)).to.equal(2)
  })
})
