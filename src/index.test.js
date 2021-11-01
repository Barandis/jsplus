// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('.')

const compose = require('./combinators/compose')
const flip = require('./combinators/flip')
const pipe = require('./combinators/pipe')

const A = require('./combinators/pure/A')
const B = require('./combinators/pure/B')
const C = require('./combinators/pure/C')
const I = require('./combinators/pure/I')
const K = require('./combinators/pure/K')
const S = require('./combinators/pure/S')
const W = require('./combinators/pure/W')

const curry = require('./functions/curry')
const curry2 = require('./functions/curry2')
const curry3 = require('./functions/curry3')
const curry4 = require('./functions/curry4')
const curry5 = require('./functions/curry5')
const curryn = require('./functions/curryn')
const enumerate = require('./functions/enumerate')
const partial = require('./functions/partial')
const range = require('./functions/range')
const scan = require('./functions/scan')

describe('src index', () => {
  it('provides all of the exported functions', () => {
    // combinators
    expect(compose).to.equal(index.compose)
    expect(flip).to.equal(index.flip)
    expect(pipe).to.equal(index.pipe)

    // pure combinators
    expect(A).to.equal(index.A)
    expect(B).to.equal(index.B)
    expect(C).to.equal(index.C)
    expect(I).to.equal(index.I)
    expect(K).to.equal(index.K)
    expect(S).to.equal(index.S)
    expect(W).to.equal(index.W)

    // functions
    expect(curry).to.equal(index.curry)
    expect(curry2).to.equal(index.curry2)
    expect(curry3).to.equal(index.curry3)
    expect(curry4).to.equal(index.curry4)
    expect(curry5).to.equal(index.curry5)
    expect(curryn).to.equal(index.curryn)
    expect(enumerate).to.equal(index.enumerate)
    expect(partial).to.equal(index.partial)
    expect(range).to.equal(index.range)
    expect(scan).to.equal(index.scan)
  })
})
