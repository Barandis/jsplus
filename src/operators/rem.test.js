// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const rem = require('operators/rem')
const { rand } = require('test/utils')

describe('rem', () => {
  it('divides two numbers and returns the remainder', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (b !== 0) {
        expect(rem(a, b))
          .to.equal(rem(a)(b))
          .and.to.equal(a % b)
      }
    }
  })
})
