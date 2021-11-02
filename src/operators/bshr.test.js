// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const bshr = require('operators/bshr')
const { randInt } = require('test/utils')

describe('bshr', () => {
  it('bitwise right shifts a number', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt(0, 16)
      expect(bshr(a, b))
        .to.equal(bshr(a)(b))
        .and.to.equal(a >> b)
    }
  })
})
