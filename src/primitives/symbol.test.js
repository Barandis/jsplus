// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { symbol } = require('primitives')

describe('symbol', () => {
  it('converts anything into a symbol', () => {
    expect(symbol(0)).to.equal(Symbol.for('0'))
    expect(symbol([])).to.equal(Symbol.for(''))
    expect(symbol([1, 2])).to.equal(Symbol.for('1,2'))
    expect(symbol({})).to.equal(Symbol.for('[object Object]'))
    expect(symbol(true)).to.equal(Symbol.for('true'))
    expect(symbol(null)).to.equal(Symbol.for('null'))
    expect(symbol(undefined)).to.equal(Symbol.for('undefined'))
    expect(symbol('test')).to.equal(Symbol.for('test'))
  })
})
