// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { swap } = require('combinators')
const { range } = require('iterators')
const { le } = require('operators')

describe('le', () => {
  it('tests two numbers for less than or equal', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(le(a)(a)).to.be.true
      expect(le(a)(b)).to.equal(a <= b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      const lea = swap(le)(a)
      expect(lea(b)).to.equal(b <= a)
    }
  })
})
