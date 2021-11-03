// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expectIterator } = require('test/utils')

const swap = require('combinators/swap')
const map = require('iterators/map')
const { add, prop } = require('operators')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('map', () => {
  it('maps each value of an array over a function', () => {
    const result = map(add(1), [1, 2, 3, 4, 5])
    expectIterator(result, [2, 3, 4, 5, 6])
  })
  it('works with strings', () => {
    const result = map(x => x.toUpperCase(), 'test')
    expectIterator(result, ['T', 'E', 'S', 'T'])
  })
  it('works with iterators', () => {
    const result = map(add(1), upTo5())
    expectIterator(result, [1, 2, 3, 4, 5, 6])
  })
  it('works with objects', () => {
    const result = map(swap(prop)(1), { a: 1, b: 2, c: 3 })
    expectIterator(result, [1, 2, 3])
  })
  it('works with functions', () => {
    const result = map(add(1), x => (x < 5 ? x + 1 : undefined))
    expectIterator(result, [2, 3, 4, 5, 6])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = map(add(1), [])
    expectIterator(result, [])
  })
})
