// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('functions/range')
const ceq = require('operators/ceq')

const { rand } = require('test/utils')

describe('ceq', () => {
  it('tests two numbers for equality', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(ceq(a, a)).to.equal(ceq(a)(a)).and.to.be.true
      expect(ceq(a, b))
        .to.equal(ceq(a)(b))
        // eslint-disable-next-line eqeqeq
        .to.equal(a == b)
    }
  })
})
