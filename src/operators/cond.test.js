// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const rotr = require('combinators/rotr')
const range = require('functions/range')
const cond = require('operators/cond')

const { rand, randInt } = require('test/utils')

describe('cond', () => {
  it('chooses one of its second or third arguments depending on the first', () => {
    for (const _ of range(10)) {
      const a = randInt(0, 2)
      const b = rand(-1000, 1000)
      const c = rand(-1000, 1000)
      expect(cond(a, b, c))
        .to.equal(cond(a)(b)(c))
        .and.to.equal(a ? b : c)
    }
  })
  it('moves the conditional to the end with rotr', () => {
    const bool2num = rotr(cond)(1)(0)
    for (const _ of range(10)) {
      const a = randInt(0, 2)
      expect(bool2num(a)).to.equal(a)
    }
  })
})
