// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const le = require('operators/le')
const { rand } = require('./test_utils')

describe('le', () => {
  it('tests two numbers for less than or equal', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(le(a, a)).to.equal(le(a)(a)).and.to.be.true
      expect(le(a, b))
        .to.equal(le(a)(b))
        .to.equal(a <= b)
    }
  })
})
