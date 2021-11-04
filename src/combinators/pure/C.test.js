// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')
const div = require('operators/div')
const sub = require('operators/sub')

describe('C combinator', () => {
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
