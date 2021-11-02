// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('functions/range')
const bor = require('operators/bor')

const { randInt } = require('test/utils')

describe('bor', () => {
  it('bitwise ORs two numbers', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt((-2) ** 32, 2 ** 32)
      expect(bor(a, b))
        .to.equal(bor(a)(b))
        .and.to.equal(a | b)
    }
  })
})
