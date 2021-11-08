// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, randInt } = require('test/utils')

const { swap } = require('combinators')
const { range } = require('iterators')
const { brs } = require('operators')

describe('brs', () => {
  it('bitwise right shifts a number', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt(0, 16)
      expect(brs(a)(b)).to.equal(a >> b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = randInt(0, 16)
      const b = randInt((-2) ** 32, 2 ** 32)
      const brsa = swap(brs)(a)
      expect(brsa(b)).to.equal(b >> a)
    }
  })
})
