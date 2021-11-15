// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { range } = require('iterators')
const { remBy } = require('operators')

describe('remBy', () => {
  it('divides two numbers in reverse order and returns the remainder', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (a !== 0) {
        expect(remBy(a)(b)).to.equal(b % a)
      }
    }
  })
})
