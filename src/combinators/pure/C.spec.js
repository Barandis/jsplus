// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const B = require('./B')
const C = require('./C')
const K = require('./K')
const S = require('./S')

describe('C combinator', () => {
  const sub = x => y => x - y
  const div = x => y => x / y

  it('flips the order of its final two arguments', () => {
    expect(C(sub)(3)(4)).to.equal(1)
    expect(C(div)(2)(7)).to.equal(3.5)
  })
  it('can be constructed from S(S(K(S(KS)K))S)(KK)', () => {
    const c = S(S(K(S(K(S))(K)))(S))(K(K))
    expect(c(sub)(3)(4)).to.equal(1)
    expect(c(div)(2)(7)).to.equal(3.5)
  })
  it('can be constructed from S(BBS)(KK)', () => {
    const c = S(B(B)(S))(K(K))
    expect(c(sub)(3)(4)).to.equal(1)
    expect(c(div)(2)(7)).to.equal(3.5)
  })
})
