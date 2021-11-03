// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('iterators/range')
const band = require('operators/band')

const { randInt } = require('test/utils')

describe('band', () => {
  it('bitwise ANDs two numbers', () => {
    for (const _ of range(10)) {
      const a = randInt((-2) ** 32, 2 ** 32)
      const b = randInt((-2) ** 32, 2 ** 32)
      expect(band(a, b))
        .to.equal(band(a)(b))
        .and.to.equal(a & b)
    }
  })
})
