// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('functions/range')
const cne = require('operators/cne')

const { rand } = require('test/utils')

describe('cne', () => {
  it('tests two numbers for inequality', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(cne(a, a)).to.equal(cne(a)(a)).and.to.be.false
      expect(cne(a, b))
        .to.equal(cne(a)(b))
        // eslint-disable-next-line eqeqeq
        .to.equal(a != b)
    }
  })
})
