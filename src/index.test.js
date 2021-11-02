// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const compose = require('combinators/compose')
const flip = require('combinators/flip')
const pipe = require('combinators/pipe')

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

const curry = require('functions/curry')
const curry2 = require('functions/curry2')
const curry3 = require('functions/curry3')
const curry4 = require('functions/curry4')
const curry5 = require('functions/curry5')
const curryn = require('functions/curryn')
const enumerate = require('functions/enumerate')
const partial = require('functions/partial')
const range = require('functions/range')
const scan = require('functions/scan')

const add = require('operators/add')
const ceq = require('operators/ceq')
const cne = require('operators/cne')
const div = require('operators/div')
const eq = require('operators/eq')
const ge = require('operators/ge')
const gt = require('operators/gt')
const le = require('operators/le')
const lt = require('operators/lt')
const mul = require('operators/mul')
const ne = require('operators/ne')
const neg = require('operators/neg')
const pos = require('operators/pos')
const pow = require('operators/pow')
const rem = require('operators/rem')
const sub = require('operators/sub')

const index = require('.')

describe('src index', () => {
  it('provides all of the exported functions', () => {
    // combinators
    expect(compose).to.equal(index.compose)
    expect(flip).to.equal(index.flip)
    expect(pipe).to.equal(index.pipe)

    // pure combinators
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

    // operators
    expect(add).to.equal(index.add)
    expect(ceq).to.equal(index.ceq)
    expect(cne).to.equal(index.cne)
    expect(div).to.equal(index.div)
    expect(eq).to.equal(index.eq)
    expect(ge).to.equal(index.ge)
    expect(gt).to.equal(index.gt)
    expect(le).to.equal(index.le)
    expect(lt).to.equal(index.lt)
    expect(mul).to.equal(index.mul)
    expect(ne).to.equal(index.ne)
    expect(neg).to.equal(index.neg)
    expect(pos).to.equal(index.pos)
    expect(pow).to.equal(index.pow)
    expect(rem).to.equal(index.rem)
    expect(sub).to.equal(index.sub)
  })
})
