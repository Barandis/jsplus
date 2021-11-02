// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('operators')

const add = require('operators/add')
const band = require('operators/band')
const blsr = require('operators/blsr')
const bnot = require('operators/bnot')
const bor = require('operators/bor')
const bshl = require('operators/bshl')
const bshr = require('operators/bshr')
const bxor = require('operators/bxor')
const ceq = require('operators/ceq')
const cne = require('operators/cne')
const cond = require('operators/cond')
const div = require('operators/div')
const eq = require('operators/eq')
const ge = require('operators/ge')
const gt = require('operators/gt')
const land = require('operators/land')
const le = require('operators/le')
const lnot = require('operators/lnot')
const lor = require('operators/lor')
const lt = require('operators/lt')
const mul = require('operators/mul')
const ne = require('operators/ne')
const neg = require('operators/neg')
const pos = require('operators/pos')
const pow = require('operators/pow')
const rem = require('operators/rem')
const sub = require('operators/sub')

describe('operators index', () => {
  it('provides all of the exported operators', () => {
    expect(add).to.equal(index.add)
    expect(band).to.equal(index.band)
    expect(blsr).to.equal(index.blsr)
    expect(bnot).to.equal(index.bnot)
    expect(bor).to.equal(index.bor)
    expect(bshl).to.equal(index.bshl)
    expect(bshr).to.equal(index.bshr)
    expect(bxor).to.equal(index.bxor)
    expect(ceq).to.equal(index.ceq)
    expect(cne).to.equal(index.cne)
    expect(cond).to.equal(index.cond)
    expect(div).to.equal(index.div)
    expect(eq).to.equal(index.eq)
    expect(ge).to.equal(index.ge)
    expect(gt).to.equal(index.gt)
    expect(land).to.equal(index.land)
    expect(le).to.equal(index.le)
    expect(lnot).to.equal(index.lnot)
    expect(lor).to.equal(index.lor)
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
