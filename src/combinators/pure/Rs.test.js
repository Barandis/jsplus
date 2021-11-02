// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const Cs = require('combinators/pure/Cs')
const K = require('combinators/pure/K')
const Rs = require('combinators/pure/Rs')
const S = require('combinators/pure/S')

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
