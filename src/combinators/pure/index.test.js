// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('combinators/pure')

const A = require('combinators/pure/A')
const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const I = require('combinators/pure/I')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')
const W = require('combinators/pure/W')

describe('pure combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(A).to.equal(index.A)
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(K).to.equal(index.K)
    expect(S).to.equal(index.S)
    expect(W).to.equal(index.W)
  })
})
