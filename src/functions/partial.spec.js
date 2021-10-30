// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const partial = require('./partial')

describe('partial', () => {
  it('partially applies arguments to a function', () => {
    const sum = partial((a, b, c) => a + b + c, 1, 2)
    expect(sum(3)).to.equal(6)
  })
  it('partially applies when more than one argument remains', () => {
    const sum = partial((a, b, c) => a + b + c, 1)
    expect(sum(2, 3)).to.equal(6)
  })
  it('returns a function even when enough arguments are passed', () => {
    const sum = partial((a, b, c) => a + b + c, 1, 2, 3)
    expect(sum()).to.equal(6)
  })
})
