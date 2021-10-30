// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('.')

const B = require('./combinators/pure/B')
const C = require('./combinators/pure/C')
const I = require('./combinators/pure/I')
const K = require('./combinators/pure/K')
const S = require('./combinators/pure/S')
const W = require('./combinators/pure/W')

const curry = require('./functions/curry')
const partial = require('./functions/partial')
const scan = require('./functions/scan')

describe('src index', () => {
  it('provides all of the exported functions', () => {
    // combinators
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(K).to.equal(index.K)
    expect(S).to.equal(index.S)
    expect(W).to.equal(index.W)

    // functions
    expect(curry).to.equal(index.curry)
    expect(partial).to.equal(index.partial)
    expect(scan).to.equal(index.scan)
  })
})
