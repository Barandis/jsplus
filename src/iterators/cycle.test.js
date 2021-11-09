// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { array, collect, cycle, take } = require('iterators')

function* upTo2() {
  for (let i = 0; i <= 2; i += 1) {
    yield i
  }
}

describe('cycle', () => {
  it('repeats the elements of an array', () => {
    const result = take(10)(cycle([1, 2, 3]))
    expect(collect(result)).to.deep.equal([1, 2, 3, 1, 2, 3, 1, 2, 3, 1])
  })
  it('repeats the characters of a string', () => {
    const result = take(10)(cycle('test'))
    expect(collect(result)).to.equal('testtestte')
  })
  it('repeats the elements of a generator function', () => {
    const result = take(10)(cycle(upTo2))
    expect(collect(result)).to.deep.equal([0, 1, 2, 0, 1, 2, 0, 1, 2, 0])
  })
  it('repeats the elements of an object', () => {
    const result = take(10)(cycle({ a: 1, b: 2, c: 3 }))
    expect(array(result)).to.deep.equal([
      ['a', 1],
      ['b', 2],
      ['c', 3],
      ['a', 1],
      ['b', 2],
      ['c', 3],
      ['a', 1],
      ['b', 2],
      ['c', 3],
      ['a', 1],
    ])
  })
  it('repeats the return values of a function', () => {
    const result = take(10)(cycle(x => (x < 3 ? x : undefined)))
    expect(collect(result)).to.deep.equal([0, 1, 2, 0, 1, 2, 0, 1, 2, 0])
  })
  it('repeats a single value continuously', () => {
    const result = take(10)(cycle(4))
    expect(collect(result)).to.deep.equal([4, 4, 4, 4, 4, 4, 4, 4, 4, 4])
  })
})
