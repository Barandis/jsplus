// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand, randInt } = require('test/utils')

const { range } = require('iterators')
const { prop } = require('operators')

describe('prop', () => {
  it('returns the value of a property in reverse order', () => {
    const count = prop('length')
    for (const _ of range(10)) {
      const a = [...range(randInt(3, 7))].map(() => rand(-1000, 1000))
      expect(count(a)).to.equal(a.length)
    }
  })
})
