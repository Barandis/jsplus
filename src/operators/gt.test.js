// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const gt = require('operators/gt')
const { rand } = require('./test_utils')

describe('gt', () => {
  it('tests two numbers for greater than', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(gt(a, a)).to.equal(gt(a)(a)).and.to.be.false
      expect(gt(a, b))
        .to.equal(gt(a)(b))
        .to.equal(a > b)
    }
  })
})
