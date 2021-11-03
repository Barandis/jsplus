// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expectIterator } = require('test/utils')

const scan = require('iterators/scan')
const add = require('operators/add')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}
const plusScan = scan(add)

describe('scan', () => {
  it('collects the intermediate results from a reduction', () => {
    const result = scan(add, [0, 1, 2, 3, 4, 5])
    expectIterator(result, [0, 1, 3, 6, 10, 15])
  })
  it('works with strings', () => {
    const result = scan((a, b) => (a + b).toUpperCase(), 'test')
    expectIterator(result, ['t', 'TE', 'TES', 'TEST'])
  })
  it('works with iterators', () => {
    const result = scan(add, upTo5())
    expectIterator(result, [0, 1, 3, 6, 10, 15])
  })
  it('works with objects', () => {
    const result = scan((a, b) => [a[0] + b[0], a[1] + b[1]])({ a: 1, b: 2, c: 3 })
    expectIterator(result, [
      ['a', 1],
      ['ab', 3],
      ['abc', 6],
    ])
  })
  it('works with functions', () => {
    const fn = x => (x <= 5 ? x : undefined)
    const result = scan(add, fn)
    expectIterator(result, [0, 1, 3, 6, 10, 15])
  })
  it('can be curried to accept just an iterable', () => {
    const result = plusScan([0, 1, 2, 3, 4, 5])
    expectIterator(result, [0, 1, 3, 6, 10, 15])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = scan(add, [])
    expectIterator(result, [])
  })
  it('returns the element in a single-element input', () => {
    const result = scan(add, [1])
    expectIterator(result, [1])
  })
})
