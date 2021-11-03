// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const index = require('iterators')

const iterator = require('iterators/iterator')

describe('interators index', () => {
  it('provides all of the exported iterator functions', () => {
    expect(iterator).to.equal(index.iterator)
  })
})
