// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const range = require('iterators/range')
const eq = require('operators/eq')

describe('eq', () => {
  it('tests two numbers for strict equality', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(eq(a, a)).to.equal(eq(a)(a)).and.to.be.true
      expect(eq(a, b))
        .to.equal(eq(a)(b))
        .to.equal(a === b)
    }
  })
})
