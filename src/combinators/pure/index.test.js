// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('.')

const B = require('./B')
const C = require('./C')
const I = require('./I')
const K = require('./K')
const S = require('./S')
const W = require('./W')

describe('pure combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(K).to.equal(index.K)
    expect(S).to.equal(index.S)
    expect(W).to.equal(index.W)
  })
})
