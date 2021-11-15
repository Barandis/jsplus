// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { range } = require('iterators')
const { divBy } = require('operators')

describe('divBy', () => {
  it('divides two numbers in reverse order', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (a !== 0) {
        expect(divBy(a)(b)).to.equal(b / a)
      }
    }
  })
})
