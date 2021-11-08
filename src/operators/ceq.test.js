// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { range } = require('iterators')
const { ceq } = require('operators')

describe('ceq', () => {
  it('tests two numbers for equality', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(ceq(a)(a)).to.be.true
      // eslint-disable-next-line eqeqeq
      expect(ceq(a)(b)).to.equal(a == b)
    }
  })
})
