// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand, randInt } = require('test/utils')

const { rotr } = require('combinators')
const { range } = require('iterators')
const { cond } = require('operators')

describe('cond', () => {
  it('chooses one of its second or third arguments depending on the first', () => {
    for (const _ of range(10)) {
      const a = randInt(0, 2)
      const b = rand(-1000, 1000)
      const c = rand(-1000, 1000)
      expect(cond(a)(b)(c)).to.equal(a ? b : c)
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
