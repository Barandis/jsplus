// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { swap } = require('combinators')
const { collect, map } = require('iterators')
const { add, prop } = require('operators')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('map', () => {
  it('maps each value of an array over a function', () => {
    const result = map(add(1))([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([2, 3, 4, 5, 6])
  })
  it('works with strings', () => {
    const result = map(x => x.toUpperCase())('test')
    expect(collect(result)).to.equal('TEST')
  })
  it('works with generator functions', () => {
    const result = map(add(1))(upTo5)
    expect(collect(result)).to.deep.equal([1, 2, 3, 4, 5, 6])
  })
  it('works with objects', () => {
    const result = map(swap(prop)(1))({ a: 1, b: 2, c: 3 })
    expect(collect(result)).to.deep.equal([1, 2, 3])
  })
  it('works with functions', () => {
    const result = map(add(1))(x => (x < 5 ? x + 1 : undefined))
    expect(collect(result)).to.deep.equal([2, 3, 4, 5, 6])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = map(add(1))([])
    expect(collect(result)).to.deep.equal([])
  })
})
