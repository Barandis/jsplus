// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand, randInt, randString } = require('test/utils')

const { range } = require('iterators')
const { add } = require('operators')

describe('add', () => {
  it('adds two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      expect(add(a)(b)).to.equal(a + b)
    }
  })
  it('concatenates two strings', () => {
    for (const _ of range(10)) {
      const a = randString(randInt(2, 10))
      const b = randString(randInt(2, 10))
      expect(add(a)(b)).to.equal(a + b)
    }
  })
})
