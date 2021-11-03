// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const index = require('primitives')

const bigint = require('primitives/bigint')
const boolean = require('primitives/boolean')
const number = require('primitives/number')
const string = require('primitives/string')
const symbol = require('primitives/symbol')

describe('primitives index', () => {
  it('provides all of the exported primitive functions', () => {
    expect(bigint).to.equal(index.bigint)
    expect(boolean).to.equal(index.boolean)
    expect(number).to.equal(index.number)
    expect(string).to.equal(index.string)
    expect(symbol).to.equal(index.symbol)
  })
})
