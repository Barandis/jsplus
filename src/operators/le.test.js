// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const swap = require('combinators/swap')
const range = require('iterators/range')
const le = require('operators/le')

const { rand } = require('test/utils')

describe('le', () => {
  it('tests two numbers for less than or equal', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(le(a, a)).to.equal(le(a)(a)).and.to.be.true
      expect(le(a, b))
        .to.equal(le(a)(b))
        .to.equal(a <= b)
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
