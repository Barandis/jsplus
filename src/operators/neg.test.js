// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const range = require('iterators/range')
const neg = require('operators/neg')

describe('neg', () => {
  it('negates a number', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      expect(neg(a)).to.equal(-a)
    }
  })
})
