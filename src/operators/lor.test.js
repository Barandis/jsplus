// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, randInt } = require('test/utils')

const { range } = require('iterators')
const { lor } = require('operators')

describe('lor', () => {
  it('logically ORs two numbers', () => {
    for (const _ of range(10)) {
      // two numbers that are either 0 or 1
      const a = randInt(0, 2)
      const b = randInt(0, 2)
      expect(lor(a)(b)).to.equal(a || b)
    }
  })
})
