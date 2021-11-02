// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const neg = require('operators/neg')
const { rand } = require('./test_utils')

describe('neg', () => {
  it('negates a number', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      expect(neg(a)).to.equal(neg(a)).and.to.equal(-a)
    }
  })
})
