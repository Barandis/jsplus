// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const index = require('iterators')

const enumerate = require('iterators/enumerate')
const iterator = require('iterators/iterator')
const map = require('iterators/map')
const range = require('iterators/range')
const reduce = require('iterators/reduce')
const scan = require('iterators/scan')

describe('interators index', () => {
  it('provides all of the exported iterator functions', () => {
    expect(enumerate).to.equal(index.enumerate)
    expect(iterator).to.equal(index.iterator)
    expect(map).to.equal(index.map)
    expect(range).to.equal(index.range)
    expect(reduce).to.equal(index.reduce)
    expect(scan).to.equal(index.scan)
  })
})
