// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('combinators/pure')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const I = require('combinators/pure/I')
const Is = require('combinators/pure/Is')
const K = require('combinators/pure/K')
const Psi = require('combinators/pure/Psi')
const S = require('combinators/pure/S')
const Sp = require('combinators/pure/Sp')
const T = require('combinators/pure/T')
const W = require('combinators/pure/W')

describe('pure combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(Is).to.equal(index.Is)
    expect(K).to.equal(index.K)
    expect(Psi).to.equal(index.Psi)
    expect(S).to.equal(index.S)
    expect(Sp).to.equal(index.Sp)
    expect(T).to.equal(index.T)
    expect(W).to.equal(index.W)
  })
})
