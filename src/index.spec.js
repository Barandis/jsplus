// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/common')

const index = require('.')

const curry = require('./functions/curry')
const scan = require('./functions/scan')

describe('src index', () => {
  it('provides all of the exported functions', () => {
    expect(curry).to.equal(index.curry)
    expect(scan).to.equal(index.scan)
  })
})
