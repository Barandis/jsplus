// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, randInt } = require('test/utils')

const swap = require('combinators/swap')
const range = require('iterators/range')
const burs = require('operators/burs')

describe('burs', () => {
  it('bitwise unsigned right shifts a number', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt(0, 16)
      expect(burs(a, b))
        .to.equal(burs(a)(b))
        .and.to.equal(a >>> b)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = randInt(0, 16)
      const b = randInt((-2) ** 32, 2 ** 32)
      const bursa = swap(burs)(a)
      expect(bursa(b)).to.equal(b >>> a)
    }
  })
})
