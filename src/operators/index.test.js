// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('operators')

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

describe('operators index', () => {
  it('provides all of the exported operators', () => {
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
