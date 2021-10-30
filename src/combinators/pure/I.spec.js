// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const K = require('./K')
const I = require('./I')
const S = require('./S')

describe('I combinator', () => {
  it('returns its argument', () => {
    expect(I(1)).to.equal(1)
    expect(I('a')).to.equal('a')
    expect(I(I)).to.equal(I)
    expect(I(S)).to.equal(S)
  })
  it('can be constructed from SKK', () => {
    const i = S(K)(K)
    expect(i(1)).to.equal(1)
    expect(i('a')).to.equal('a')
    expect(i(I)).to.equal(I)
    expect(i(S)).to.equal(S)
  })
})