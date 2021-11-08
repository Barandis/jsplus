// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { swap } = require('combinators')
const { range } = require('iterators')
const { gt } = require('operators')

describe('gt', () => {
  it('tests two numbers for greater than', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(gt(a)(a)).to.be.false
      expect(gt(a)(b)).to.equal(a > b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      const gta = swap(gt)(a)
      expect(gta(b)).to.equal(b > a)
    }
  })
})
