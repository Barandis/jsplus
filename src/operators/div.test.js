// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const div = require('operators/div')
const { rand } = require('./test_utils')

describe('div', () => {
  it('divides two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      if (b !== 0) {
        expect(div(a, b))
          .to.equal(div(a)(b))
          .and.to.equal(a / b)
      }
    }
  })
})
