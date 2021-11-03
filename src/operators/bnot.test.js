// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, randInt } = require('test/utils')

const range = require('iterators/range')
const bnot = require('operators/bnot')

describe('bnot', () => {
  it('bitwise NOTs a number', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      expect(bnot(a)).to.equal(~a)
    }
  })
})
