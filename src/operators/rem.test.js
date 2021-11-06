// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const swap = require('combinators/swap')
const range = require('iterators/range')
const rem = require('operators/rem')

describe('rem', () => {
  it('divides two numbers and returns the remainder', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (b !== 0) {
        expect(rem(a)(b)).to.equal(a % b)
      }
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (a !== 0) {
        const rembya = swap(rem)(a)
        expect(rembya(b)).to.equal(b % a)
      }
    }
  })
})
