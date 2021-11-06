// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand, randInt } = require('test/utils')

const range = require('iterators/range')
const pow = require('operators/pow')

describe('pow', () => {
  it('raises one number to another power', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = a < 0 ? randInt(0, 100) : rand(-100, 100)

      if (a !== 0 || b !== 0) {
        expect(pow(a)(b)).to.equal(a ** b)
      }
    }
  })
})
