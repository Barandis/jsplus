// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const ne = require('operators/ne')
const { rand } = require('test/utils')

describe('ne', () => {
  it('tests two numbers for strict inequality', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(ne(a, a)).to.equal(ne(a)(a)).and.to.be.false
      expect(ne(a, b))
        .to.equal(ne(a)(b))
        .to.equal(a !== b)
    }
  })
})
