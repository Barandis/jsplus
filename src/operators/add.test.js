// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const add = require('operators/add')
const { rand, randInt, randString } = require('./test_utils')

describe('add', () => {
  it('adds two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      expect(add(a, b))
        .to.equal(add(a)(b))
        .and.to.equal(a + b)
    }
  })
  it('concatenates two strings', () => {
    for (const _ of range(10)) {
      const a = randString(randInt(2, 10))
      const b = randString(randInt(2, 10))
      expect(add(a, b))
        .to.equal(add(a)(b))
        .and.to.equal(a + b)
    }
  })
})
