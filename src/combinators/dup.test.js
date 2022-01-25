// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { dup } = require('combinators')
const { mul } = require('operators')

describe('dup', () => {
  it('can create a function that duplicates its argument', () => {
    const sq = dup(mul)
    expect(sq(2)).to.equal(4)
    expect(sq(5)).to.equal(25)
    expect(sq(-1.5)).to.equal(2.25)
  })
})
