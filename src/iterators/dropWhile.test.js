// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose } = require('combinators')
const { collect, dropWhile } = require('iterators')
const { gt, prop } = require('operators')

function* upTo5() {
  for (let n = 1; n <= 5; n += 1) {
    yield n
  }
}

const isLower = x => x === x.toLowerCase()

describe('dropWhile', () => {
  it('drops array elements while a predicate is true', () => {
    const result = dropWhile(gt(3))([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([3, 4, 5])
  })
  it('drops characters from a string while a predicate is true', () => {
    const result = dropWhile(isLower)('testIng')
    expect(collect(result)).to.equal('Ing')
  })
  it('drops iterator elements while a predicate is true', () => {
    const result = dropWhile(gt(3))(upTo5)
    expect(collect(result)).to.deep.equal([3, 4, 5])
  })
  it('drops object properties while a predicate is true', () => {
    const result = dropWhile(compose(gt(3))(prop(1)))({ a: 1, b: 2, c: 3 })
    expect(collect(result)).to.deep.equal({ c: 3 })
  })
  it('drops function return values while a predicate is true', () => {
    const result = dropWhile(gt(3))(x => (x < 5 ? x : undefined))
    expect(collect(result)).to.deep.equal([3, 4])
  })
  it('drops a single value if the predicate is true', () => {
    let result = dropWhile(gt(3))(4)
    expect(collect(result)).to.deep.equal([4])
    result = dropWhile(gt(3))(2)
    expect(collect(result)).to.deep.equal([])
  })
  it('returns an empty iterator if the first element succeeds', () => {
    const result = dropWhile(gt(3))([4, 1, 2, 3, 4])
    expect(collect(result)).to.deep.equal([4, 1, 2, 3, 4])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = dropWhile(gt(3))([])
    expect(collect(result)).to.deep.equal([])
  })
})
