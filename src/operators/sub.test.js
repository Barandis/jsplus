// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const sub = require('operators/sub')
const { rand } = require('./test_utils')

describe('sub', () => {
  it('subtracts two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      expect(sub(a, b))
        .to.equal(sub(a)(b))
        .and.to.equal(a - b)
    }
  })
})
