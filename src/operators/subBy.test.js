// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { range } = require('iterators')
const { subBy } = require('operators')

describe('subBy', () => {
  it('subtracts two numbers in reverse order', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      expect(subBy(a)(b)).to.equal(b - a)
    }
  })
})
