// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const boolean = require('primitives/boolean')

/* eslint-disable no-unused-expressions */

describe('boolean', () => {
  it('converts falsy values to false', () => {
    expect(boolean(false)).to.be.false
    expect(boolean(0)).to.be.false
    expect(boolean(-0)).to.be.false
    expect(boolean(0n)).to.be.false
    expect(boolean('')).to.be.false
    expect(boolean(null)).to.be.false
    expect(boolean(undefined)).to.be.false
    expect(boolean(NaN)).to.be.false
  })
  it('converts any other value to true', () => {
    expect(boolean(1)).to.be.true
    expect(boolean(1n)).to.be.true
    expect(boolean('js')).to.be.true
    expect(boolean([])).to.be.true
    expect(boolean({})).to.be.true
    expect(boolean(Symbol(''))).to.be.true
  })
})
