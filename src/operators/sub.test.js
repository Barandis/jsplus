// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const swap = require('combinators/swap')
const range = require('functions/range')
const sub = require('operators/sub')

const { rand } = require('test/utils')

describe('sub', () => {
  it('subtracts two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      expect(sub(a, b))
        .to.equal(sub(a)(b))
        .and.to.equal(a - b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      const minusa = swap(sub)(a)
      expect(minusa(b)).to.equal(b - a)
    }
  })
})
