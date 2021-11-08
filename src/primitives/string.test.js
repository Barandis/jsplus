// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { string } = require('primitives')

describe('string', () => {
  it('converts anything into a string', () => {
    expect(string(0)).to.equal('0')
    expect(string([])).to.equal('')
    expect(string([1, 2])).to.equal('1,2')
    expect(string({})).to.equal('[object Object]')
    expect(string(true)).to.equal('true')
    expect(string(null)).to.equal('null')
    expect(string(undefined)).to.equal('undefined')
    expect(string(Symbol('test'))).to.equal('Symbol(test)')
  })
})
