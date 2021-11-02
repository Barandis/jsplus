// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const pow = require('operators/pow')
const { rand, randInt } = require('test/utils')

describe('pow', () => {
  it('raises one number to another power', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = a < 0 ? randInt(0, 100) : rand(-100, 100)

      if (a !== 0 || b !== 0) {
        expect(pow(a, b))
          .to.equal(pow(a)(b))
          .and.to.equal(a ** b)
      }
    }
  })
})
