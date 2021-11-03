// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const swap = require('combinators/swap')
const range = require('iterators/range')
const div = require('operators/div')

describe('div', () => {
  it('divides two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (b !== 0) {
        expect(div(a, b))
          .to.equal(div(a)(b))
          .and.to.equal(a / b)
      }
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (a !== 0) {
        const divbya = swap(div)(a)
        expect(divbya(b)).to.equal(b / a)
      }
    }
  })
})
