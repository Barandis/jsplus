// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const array = require('iterators/array')
const range = require('iterators/range')
const reduce = require('iterators/reduce')
const reverse = require('iterators/reverse')
const add = require('operators/add')

describe('reverse', () => {
  it('reverses arrays', () => {
    const result = reverse([1, 2, 3, 4, 5])
    expect(array(result)).to.deep.equal([5, 4, 3, 2, 1])
  })
  it('reverses strings', () => {
    const result = reverse('testing')
    expect(reduce(add)(result)).to.equal('gnitset')
  })
  it('reverses iterators', () => {
    function* five() {
      for (const i of range(5)) {
        yield i
      }
    }
    const result = reverse(five())
    expect(array(result)).to.deep.equal([4, 3, 2, 1, 0])
  })
  it('reverses objects', () => {
    const result = reverse({ a: 1, b: 2 })
    expect(array(result)).to.deep.equal([
      ['b', 2],
      ['a', 1],
    ])
  })
  it('reverses iterator functions', () => {
    const result = reverse(x => (x < 5 ? x : undefined))
    expect(array(result)).to.deep.equal([4, 3, 2, 1, 0])
  })
  it("doesn't do much with single values", () => {
    const result = reverse(1729)
    expect(result.next().value).to.equal(1729)
  })
})
