// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { collect, concat } = require('iterators')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('concat', () => {
  it('concatenates two arrays', () => {
    const result = concat([1, 2, 3])([4, 5, 6])
    expect(collect(result)).to.deep.equal([1, 2, 3, 4, 5, 6])
  })
  it('concatenates two strings', () => {
    const result = concat('test')('ing')
    expect(collect(result)).to.deep.equal('testing')
  })
  it('concatenates two iterators', () => {
    const result = concat(upTo5())(upTo5())
    expect(collect(result)).to.deep.equal([0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5])
  })
  it('concatenates two objects', () => {
    const result = concat({ a: 1, b: 2 })({ b: 3, c: 4 })
    expect(collect(result)).to.deep.equal({ a: 1, b: 3, c: 4 })
  })
  it('concatenates results from two functions', () => {
    const result = concat(x => (x < 5 ? x : undefined))(x => (x < 5 ? 5 - x : undefined))
    expect(collect(result)).to.deep.equal([0, 1, 2, 3, 4, 5, 4, 3, 2, 1])
  })
  it('concatenates two single values', () => {
    const result = concat(3)(4)
    expect(collect(result)).to.deep.equal([3, 4])
  })
  it('returns only the first collection if the second is empty', () => {
    const result = concat([1, 2, 3, 4, 5])('')
    expect(collect(result)).to.deep.equal([1, 2, 3, 4, 5])
  })
  it('returns only the second collection if the first is empty', () => {
    const result = concat([])('test')
    expect(collect(result)).to.equal('test')
  })
  it('returns an empty collection if both are empty', () => {
    const result = concat('')([])
    expect(collect(result)).to.deep.equal([])
  })
})
