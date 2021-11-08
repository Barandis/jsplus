// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose } = require('combinators')
const { map, reduce } = require('iterators')
const { add } = require('operators')
const { string } = require('primitives')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}
const sum = reduce(add)

describe('scan', () => {
  it('collects the intermediate results from a reduction', () => {
    const result = reduce(add)([0, 1, 2, 3, 4, 5])
    expect(result).to.equal(15)
  })
  it('works with strings', () => {
    const result = reduce((a, b) => (a + b).toUpperCase())('test')
    expect(result).to.equal('TEST')
  })
  it('works with iterators', () => {
    const result = reduce(add)(upTo5())
    expect(result).to.equal(15)
  })
  it('works with objects', () => {
    const result = reduce((a, b) => [a[0] + b[0], a[1] + b[1]])({ a: 1, b: 2, c: 3 })
    expect(result).to.deep.equal(['abc', 6])
  })
  it('works with functions', () => {
    const fn = x => (x <= 5 ? x : undefined)
    const result = reduce(add)(fn)
    expect(result).to.equal(15)
  })
  it('can be curried to accept just an iterable', () => {
    const result = sum([0, 1, 2, 3, 4, 5])
    expect(result).to.equal(15)
  })
  it('returns undefined if the input has no elements', () => {
    const result = reduce(add)([])
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.undefined
  })
  it('returns the element in a single-element input', () => {
    const result = reduce(add)([1])
    expect(result).to.equal(1)
  })
  // This is the composed example from the doc comments
  it('works well with map and compose', () => {
    const stringify = compose(reduce(add))(map(string))
    const result = stringify([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])
    expect(result).to.equal('31415926535')
  })
})
