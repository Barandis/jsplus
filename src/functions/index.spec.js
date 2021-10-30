// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('.')

const curry = require('./curry')
const partial = require('./partial')
const scan = require('./scan')

describe('functions index', () => {
  it('provides all of the exported functions', () => {
    expect(curry).to.equal(index.curry)
    expect(partial).to.equal(index.partial)
    expect(scan).to.equal(index.scan)
  })
})
