// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('.')

const curry = require('./curry')
const curry2 = require('./curry2')
const curry3 = require('./curry3')
const curry4 = require('./curry4')
const curry5 = require('./curry5')
const curryn = require('./curryn')
const partial = require('./partial')
const scan = require('./scan')

describe('functions index', () => {
  it('provides all of the exported functions', () => {
    expect(curry).to.equal(index.curry)
    expect(curry2).to.equal(index.curry2)
    expect(curry3).to.equal(index.curry3)
    expect(curry4).to.equal(index.curry4)
    expect(curry5).to.equal(index.curry5)
    expect(curryn).to.equal(index.curryn)
    expect(partial).to.equal(index.partial)
    expect(scan).to.equal(index.scan)
  })
})
