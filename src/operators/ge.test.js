// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const ge = require('operators/ge')
const { rand } = require('./test_utils')

describe('ge', () => {
  it('tests two numbers for greater than or equal', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(ge(a, a)).to.equal(ge(a)(a)).and.to.be.true
      expect(ge(a, b))
        .to.equal(ge(a)(b))
        .to.equal(a >= b)
    }
  })
})
