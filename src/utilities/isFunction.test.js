// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const isFunction = require('utilities/isFunction')

/* eslint-disable no-unused-expressions */
describe('isFunction', () => {
  it('works for function expressions', () => {
    expect(isFunction(x => x)).to.be.true
    expect(isFunction(() => {})).to.be.true
  })

  it('works for function declarations', () => {
    expect(
      // eslint-disable-next-line prefer-arrow-callback
      isFunction(function test(x) {
        return x
      }),
    ).to.be.true
    // eslint-disable-next-line prefer-arrow-callback
    expect(isFunction(function test() {})).to.be.true
  })

  it('works for function objects', () => {
    /* eslint-disable no-new-func */
    expect(isFunction(new Function('a', 'b', 'return a + b'))).to.be.true
    /* eslint-enable no-new-func */
  })

  it('works for function variables', () => {
    function add1(x, y) {
      return x + y
    }
    const add2 = (x, y) => x + y
    expect(isFunction(add1)).to.be.true
    expect(isFunction(add2)).to.be.true
  })

  it('works for things that are not functions', () => {
    expect(isFunction([])).to.be.false
    expect(isFunction({})).to.be.false
    expect(isFunction(0)).to.be.false
    expect(isFunction('')).to.be.false
  })

  it('works for null/undefined', () => {
    expect(isFunction(null)).to.be.false
    expect(isFunction(undefined)).to.be.false
  })
})
