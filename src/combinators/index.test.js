// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('.')

const compose = require('./compose')
const flip = require('./flip')
const pipe = require('./pipe')

const A = require('./pure/A')
const B = require('./pure/B')
const C = require('./pure/C')
const I = require('./pure/I')
const K = require('./pure/K')
const S = require('./pure/S')
const W = require('./pure/W')

describe('combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(compose).to.equal(index.compose)
    expect(flip).to.equal(index.flip)
    expect(pipe).to.equal(index.pipe)

    expect(A).to.equal(index.A)
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(K).to.equal(index.K)
    expect(S).to.equal(index.S)
    expect(W).to.equal(index.W)
  })
})
