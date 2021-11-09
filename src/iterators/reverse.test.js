// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { collect, range, reverse } = require('iterators')

describe('reverse', () => {
  it('reverses arrays', () => {
    const result = reverse([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([5, 4, 3, 2, 1])
  })
  it('reverses strings', () => {
    const result = reverse('testing')
    expect(collect(result)).to.equal('gnitset')
  })
  it('reverses generators', () => {
    function* five() {
      for (const i of range(5)) {
        yield i
      }
    }
    const result = reverse(five)
    expect(collect(result)).to.deep.equal([4, 3, 2, 1, 0])
  })
  it('reverses objects', () => {
    const result = reverse({ a: 1, b: 2 })
    expect(collect(result)).to.deep.equal({ b: 2, a: 1 })
  })
  it('reverses iterator functions', () => {
    const result = reverse(x => (x < 5 ? x : undefined))
    expect(collect(result)).to.deep.equal([4, 3, 2, 1, 0])
  })
  it("doesn't do much with single values", () => {
    const result = reverse(1729)
    expect(result.next().value).to.equal(1729)
  })
})
