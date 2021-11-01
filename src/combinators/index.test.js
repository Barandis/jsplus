// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('combinators')

const compose = require('combinators/compose')
const flip = require('combinators/flip')
const pipe = require('combinators/pipe')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const I = require('combinators/pure/I')
const Is = require('combinators/pure/Is')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')
const T = require('combinators/pure/T')
const W = require('combinators/pure/W')

describe('combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(compose).to.equal(index.compose)
    expect(flip).to.equal(index.flip)
    expect(pipe).to.equal(index.pipe)

    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(Is).to.equal(index.Is)
    expect(K).to.equal(index.K)
    expect(S).to.equal(index.S)
    expect(T).to.equal(index.T)
    expect(W).to.equal(index.W)
  })
})
