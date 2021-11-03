// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const range = require('iterators/range')
const mul = require('operators/mul')

describe('mul', () => {
  it('multiples two numbers', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      expect(mul(a, b))
        .to.equal(mul(a)(b))
        .and.to.equal(a * b)
    }
  })
})
