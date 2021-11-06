// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, randInt } = require('test/utils')

const range = require('iterators/range')
const band = require('operators/band')

describe('band', () => {
  it('bitwise ANDs two numbers', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt((-2) ** 32, 2 ** 32)
      expect(band(a)(b)).to.equal(a & b)
    }
  })
})
