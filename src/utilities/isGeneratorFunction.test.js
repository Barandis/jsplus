// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { isGeneratorFunction } = require('utilities')

/* eslint-disable no-unused-expressions */

function* naturals() {
  let i = 1
  for (;;) {
    yield i
    i += 1
  }
}

function* five() {
  for (let i = 0; i < 5; i += 1) {
    yield i
  }
}

describe('isGeneratorFunction', () => {
  it('returns true on generator functions', () => {
    expect(isGeneratorFunction(naturals)).to.be.true
    expect(isGeneratorFunction(five)).to.be.true
  })
  it('returns false for generators', () => {
    expect(isGeneratorFunction(naturals())).to.be.false
    expect(isGeneratorFunction(five())).to.be.false
  })
  it('returns false for non-generator functions', () => {
    expect(isGeneratorFunction(() => {})).to.be.false
    expect(isGeneratorFunction(x => x)).to.be.false
  })
  it('returns false for non-functions', () => {
    expect(isGeneratorFunction(true)).to.be.false
    expect(isGeneratorFunction(0)).to.be.false
    expect(isGeneratorFunction('[object GeneratorFunction]')).to.be.false
    expect(isGeneratorFunction([])).to.be.false
    expect(isGeneratorFunction({})).to.be.false
    expect(isGeneratorFunction(Symbol('GeneratorFunction'))).to.be.false
  })
})
