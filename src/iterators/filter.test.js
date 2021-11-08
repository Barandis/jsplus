// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose, swap, substitute } = require('combinators')
const { collect, filter } = require('iterators')
const { eq, ne, prop, rem } = require('operators')

const odd = compose(ne(0))(swap(rem)(2))
const oddValue = compose(odd)(swap(prop)(1))
const lower = substitute(eq)(x => x.toLowerCase())

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('filter', () => {
  it('retains elements of a collection that pass a predicate', () => {
    const result = filter(odd)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([1, 3, 5])
  })
  it('works with strings', () => {
    const result = filter(lower)('TeStInG')
    expect(collect(result)).to.equal('etn')
  })
  it('works with iterators', () => {
    const result = filter(odd)(upTo5())
    expect(collect(result)).to.deep.equal([1, 3, 5])
  })
  it('works with objects', () => {
    const result = filter(oddValue)({ a: 1, b: 2, c: 3 })
    expect(collect(result)).to.deep.equal({ a: 1, c: 3 })
  })
  it('works with functions', () => {
    const result = filter(odd)(x => (x < 5 ? x : undefined))
    expect(collect(result)).to.deep.equal([1, 3])
  })
  it('works with other types of values', () => {
    const result = filter(odd)(3)
    expect(collect(result)).to.deep.equal([3])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = filter(odd)([])
    expect(collect(result)).to.deep.equal([])
  })
})
