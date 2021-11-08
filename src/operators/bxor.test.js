// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, randInt } = require('test/utils')

const { range } = require('iterators')
const { bxor } = require('operators')

describe('bxor', () => {
  it('bitwise XORs two numbers', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt((-2) ** 32, 2 ** 32)
      expect(bxor(a)(b)).to.equal(a ^ b)
    }
  })
})
