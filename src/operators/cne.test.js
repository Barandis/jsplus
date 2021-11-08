// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { range } = require('iterators')
const { cne } = require('operators')

describe('cne', () => {
  it('tests two numbers for inequality', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(cne(a)(a)).to.be.false
      // eslint-disable-next-line eqeqeq
      expect(cne(a)(b)).to.equal(a != b)
    }
  })
})
