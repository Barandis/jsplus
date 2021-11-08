// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const { identity } = require('combinators')
const { range } = require('iterators')

describe('identity', () => {
  it('returns the value given to it', () => {
    for (const _ of range(20)) {
      const a = rand(-1000, 1000)
      expect(identity(a)).to.equal(a)
    }
  })
})
