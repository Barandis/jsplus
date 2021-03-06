// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { collect, take } = require('iterators')

function* naturals() {
  let i = 1
  for (;;) {
    yield i
    i += 1
  }
}

describe('take', () => {
  it('returns a subset of an iterable', () => {
    const result = take(3)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([1, 2, 3])
  })
  it('works with strings', () => {
    const result = take(3)('testing')
    expect(collect(result)).to.equal('tes')
  })
  it('works with generators', () => {
    const result = take(3)(naturals)
    expect(collect(result)).to.deep.equal([1, 2, 3])
  })
  it('works with objects', () => {
    const result = take(3)({ a: 1, b: 2, c: 3, d: 4, e: 5 })
    expect(collect(result)).to.deep.equal({ a: 1, b: 2, c: 3 })
  })
  it('works with functions', () => {
    const result = take(3)(x => x)
    expect(collect(result)).to.deep.equal([0, 1, 2])
  })
  it('works with other values', () => {
    const result = take(1)(4)
    expect(collect(result)).to.deep.equal([4])
  })
  it('returns the entire collection if it has fewer than n elements', () => {
    const result = take(5)([1, 2, 3])
    expect(collect(result)).to.deep.equal([1, 2, 3])
  })
  it('returns an empty iterator on take 0', () => {
    const result = take(0)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = take(3)([])
    expect(collect(result)).to.deep.equal([])
  })
})
