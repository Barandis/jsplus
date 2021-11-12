// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose, swap } = require('combinators')
const { collect, takeWhile } = require('iterators')
const { lt, prop } = require('operators')

function* naturals() {
  let n = 1
  for (;;) {
    yield n
    n += 1
  }
}

const isLower = x => x === x.toLowerCase()

describe('takeWhile', () => {
  it('takes array elements while a predicate is true', () => {
    const result = takeWhile(swap(lt)(3))([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([1, 2])
  })
  it('takes characters from a string while a predicate is true', () => {
    const result = takeWhile(isLower)('testIng')
    expect(collect(result)).to.equal('test')
  })
  it('takes iterator elements while a predicate is true', () => {
    const result = takeWhile(swap(lt)(3))(naturals)
    expect(collect(result)).to.deep.equal([1, 2])
  })
  it('takes object properties while a predicate is true', () => {
    const result = takeWhile(compose(swap(lt)(3))(swap(prop)(1)))({ a: 1, b: 2, c: 3 })
    expect(collect(result)).to.deep.equal({ a: 1, b: 2 })
  })
  it('takes function return values while a predicate is true', () => {
    const result = takeWhile(swap(lt)(3))(x => x)
    expect(collect(result)).to.deep.equal([0, 1, 2])
  })
  it('takes a single value if the predicate is true', () => {
    let result = takeWhile(swap(lt)(3))(4)
    expect(collect(result)).to.deep.equal([])
    result = takeWhile(swap(lt)(3))(2)
    expect(collect(result)).to.deep.equal([2])
  })
  it('returns an empty iterator if the first element does not succeed', () => {
    const result = takeWhile(swap(lt)(3))([4, 1, 2, 3, 4])
    expect(collect(result)).to.deep.equal([])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = takeWhile(swap(lt)(3))([])
    expect(collect(result)).to.deep.equal([])
  })
})
