// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const swap = require('combinators/swap')
const range = require('functions/range')
const blsr = require('operators/blsr')

const { randInt } = require('test/utils')

describe('blsr', () => {
  it('bitwise logically right shifts a number', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt(0, 16)
      expect(blsr(a, b))
        .to.equal(blsr(a)(b))
        .and.to.equal(a >>> b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = randInt(0, 16)
      const b = randInt((-2) ** 32, 2 ** 32)
      const blsra = swap(blsr)(a)
      expect(blsra(b)).to.equal(b >>> a)
    }
  })
})
