// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const bshl = require('operators/bshl')
const { randInt } = require('test/utils')

describe('bshl', () => {
  it('bitwise left shifts a number', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt(0, 16)
      expect(bshl(a, b))
        .to.equal(bshl(a)(b))
        .and.to.equal(a << b)
    }
  })
})
