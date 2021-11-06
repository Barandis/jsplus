// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const index = require('combinators/pure')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const Cs = require('combinators/pure/Cs')
const I = require('combinators/pure/I')
const Is = require('combinators/pure/Is')
const K = require('combinators/pure/K')
const P = require('combinators/pure/P')
const Q = require('combinators/pure/Q')
const R = require('combinators/pure/R')
const Rs = require('combinators/pure/Rs')
const S = require('combinators/pure/S')
const Sp = require('combinators/pure/Sp')
const T = require('combinators/pure/T')
const W = require('combinators/pure/W')

describe('pure combinators index', () => {
  it('provides all of the exported combinators', () => {
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(Cs).to.equal(index.Cs)
    expect(I).to.equal(index.I)
    expect(Is).to.equal(index.Is)
    expect(K).to.equal(index.K)
    expect(P).to.equal(index.P)
    expect(Q).to.equal(index.Q)
    expect(R).to.equal(index.R)
    expect(Rs).to.equal(index.Rs)
    expect(S).to.equal(index.S)
    expect(Sp).to.equal(index.Sp)
    expect(T).to.equal(index.T)
    expect(W).to.equal(index.W)
  })
})
