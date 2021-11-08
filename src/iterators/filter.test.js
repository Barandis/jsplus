// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const compose = require('combinators/compose')
const swap = require('combinators/swap')
const substitute = require('combinators/substitute')
const array = require('iterators/array')
const filter = require('iterators/filter')
const reduce = require('iterators/reduce')
const add = require('operators/add')
const eq = require('operators/eq')
const ne = require('operators/ne')
const prop = require('operators/prop')
const rem = require('operators/rem')

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
    expect(array(result)).to.deep.equal([1, 3, 5])
  })
  it('works with strings', () => {
    const result = filter(lower)('TeStInG')
    expect(reduce(add)(result)).to.equal('etn')
  })
  it('works with iterators', () => {
    const result = filter(odd)(upTo5())
    expect(array(result)).to.deep.equal([1, 3, 5])
  })
  it('works with objects', () => {
    const result = filter(oddValue)({ a: 1, b: 2, c: 3 })
    expect(array(result)).to.deep.equal([
      ['a', 1],
      ['c', 3],
    ])
  })
  it('works with functions', () => {
    const result = filter(odd)(x => (x < 5 ? x : undefined))
    expect(array(result)).to.deep.equal([1, 3])
  })
  it('works with other types of values', () => {
    const result = filter(odd)(3)
    expect(array(result)).to.deep.equal([3])
  })
  it('returns an empty iterator if the input has no elements', () => {
    const result = filter(odd)([])
    expect(array(result)).to.deep.equal([])
  })
})
