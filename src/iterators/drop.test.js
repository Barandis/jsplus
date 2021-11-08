// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { collect, drop } = require('iterators')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('drop', () => {
  it('returns a subset of an iterable', () => {
    const result = drop(3)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([4, 5])
  })
  it('works with strings', () => {
    const result = drop(3)('testing')
    expect(collect(result)).to.equal('ting')
  })
  it('works with iterators', () => {
    const result = drop(3)(upTo5())
    expect(collect(result)).to.deep.equal([3, 4, 5])
  })
  it('works with objects', () => {
    const result = drop(3)({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(collect(result)).to.deep.equal({ d: 4, e: 5 })
  })
  it('works with functions', () => {
    const result = drop(3)(x => (x < 5 ? x : undefined))
    expect(collect(result)).to.deep.equal([3, 4])
  })
  it('works with other values', () => {
    const result = drop(0)(4)
    expect(collect(result)).to.deep.equal([4])
  })
  it('returns the entire collection if it has n is 0', () => {
    const result = drop(0)([1, 2, 3])
    expect(collect(result)).to.deep.equal([1, 2, 3])
  })
  it('returns an empty iterator if collection has fewer than n elements', () => {
    const result = drop(6)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = drop(0)([])
    expect(collect(result)).to.deep.equal([])
  })
})
