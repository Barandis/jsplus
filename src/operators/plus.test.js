// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('iterators/range')
const plus = require('operators/plus')

const { rand } = require('test/utils')

describe('plus', () => {
  it('converts a string to a number', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000).toString()
      expect(plus(a)).to.equal(+a)
    }
  })
  it('converts a boolean to a number', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000) < 0
      expect(plus(a)).to.equal(+a)
    }
  })
})
