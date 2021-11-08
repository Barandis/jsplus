// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { constant } = require('combinators')

describe('constant', () => {
  it('produces functions that always return the same value', () => {
    const fn = constant(1729)
    expect(fn()).to.equal(1729)
    expect(fn('test')).to.equal(1729)
    expect(fn(0)).to.equal(1729)
    expect(fn(Error('not thrown'))).to.equal(1729)
  })
})
