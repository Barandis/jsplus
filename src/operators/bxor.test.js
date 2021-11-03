// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('iterators/range')
const bxor = require('operators/bxor')

const { randInt } = require('test/utils')

describe('bxor', () => {
  it('bitwise XORs two numbers', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt((-2) ** 32, 2 ** 32)
      expect(bxor(a, b))
        .to.equal(bxor(a)(b))
        .and.to.equal(a ^ b)
    }
  })
})
