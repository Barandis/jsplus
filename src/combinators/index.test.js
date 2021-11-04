// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const index = require('combinators')

const compose = require('combinators/compose')
const composeAll = require('combinators/composeAll')
const pipe = require('combinators/pipe')
const pipeAll = require('combinators/pipeAll')
const rotl = require('combinators/rotl')
const rotr = require('combinators/rotr')
const swap = require('combinators/swap')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const Cs = require('combinators/pure/Cs')
const I = require('combinators/pure/I')
const Is = require('combinators/pure/Is')
const K = require('combinators/pure/K')
const Psi = require('combinators/pure/Psi')
const Q = require('combinators/pure/Q')
const R = require('combinators/pure/R')
const Rs = require('combinators/pure/Rs')
const S = require('combinators/pure/S')
const Sp = require('combinators/pure/Sp')
const T = require('combinators/pure/T')
const W = require('combinators/pure/W')

describe('combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(compose).to.equal(index.compose)
    expect(composeAll).to.equal(index.composeAll)
    expect(pipe).to.equal(index.pipe)
    expect(pipeAll).to.equal(index.pipeAll)
    expect(rotl).to.equal(index.rotl)
    expect(rotr).to.equal(index.rotr)
    expect(swap).to.equal(index.swap)

    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(Cs).to.equal(index.Cs)
    expect(I).to.equal(index.I)
    expect(Is).to.equal(index.Is)
    expect(K).to.equal(index.K)
    expect(Psi).to.equal(index.Psi)
    expect(Q).to.equal(index.Q)
    expect(R).to.equal(index.R)
    expect(Rs).to.equal(index.Rs)
    expect(S).to.equal(index.S)
    expect(Sp).to.equal(index.Sp)
    expect(T).to.equal(index.T)
    expect(W).to.equal(index.W)
  })
})
