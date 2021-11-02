// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const swap = require('combinators/swap')
const range = require('functions/range')
const ge = require('operators/ge')
const { rand } = require('test/utils')

describe('ge', () => {
  it('tests two numbers for greater than or equal', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(ge(a, a)).to.equal(ge(a)(a)).and.to.be.true
      expect(ge(a, b))
        .to.equal(ge(a)(b))
        .to.equal(a >= b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      const gea = swap(ge)(a)
      expect(gea(b)).to.equal(b >= a)
    }
  })
})
