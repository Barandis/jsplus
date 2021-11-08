// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { array, range } = require('iterators')

describe('array', () => {
  it('transforms a string into an array', () => {
    const result = array('test')
    expect(result).to.deep.equal(['t', 'e', 's', 't'])
  })
  it('transforms an object into an array', () => {
    const result = array({ a: 1, b: 2 })
    expect(result).to.deep.equal([
      ['a', 1],
      ['b', 2],
    ])
  })
  it('transforms an iterator into an array', () => {
    function* five() {
      for (const i of range(5)) {
        yield i
      }
    }
    const result = array(five())
    expect(result).to.deep.equal([0, 1, 2, 3, 4])
  })
  it('transforms an iterable function into an array', () => {
    const fn = x => (x < 5 ? x : undefined)
    const result = array(fn)
    expect(result).to.deep.equal([0, 1, 2, 3, 4])
  })
  it('"transforms" an array into an array', () => {
    const result = array([1, 2, 3, 4, 5])
    expect(result).to.deep.equal([1, 2, 3, 4, 5])
  })
  it('transforms any other value into a single-element array', () => {
    const result = array(1729)
    expect(result).to.deep.equal([1729])
  })
})
