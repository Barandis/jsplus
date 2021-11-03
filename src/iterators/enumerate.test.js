// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const enumerate = require('iterators/enumerate')

describe('enumerate', () => {
  it('yields a series of values along with their indexes', () => {
    const result = [...enumerate(['a', 'b', 'c', 'd', 'e'])]
    expect(result).to.deep.equal([
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
      [3, 'd'],
      [4, 'e'],
    ])
  })
  it('works with strings', () => {
    const result = [...enumerate('abcde')]
    expect(result).to.deep.equal([
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
      [3, 'd'],
      [4, 'e'],
    ])
  })
  it('works with iterators', () => {
    function* test() {
      for (const letter of 'abcde') yield letter
    }
    const result = [...enumerate(test())]
    expect(result).to.deep.equal([
      [0, 'a'],
      [1, 'b'],
      [2, 'c'],
      [3, 'd'],
      [4, 'e'],
    ])
  })
  it('can start indexes at a point other than 0', () => {
    const result = [...enumerate('abcde', 4)]
    expect(result).to.deep.equal([
      [4, 'a'],
      [5, 'b'],
      [6, 'c'],
      [7, 'd'],
      [8, 'e'],
    ])
  })
  it('will drop the fractional part off floating point start indexes', () => {
    const result = [...enumerate('abcde', 4.6)]
    expect(result).to.deep.equal([
      [4, 'a'],
      [5, 'b'],
      [6, 'c'],
      [7, 'd'],
      [8, 'e'],
    ])
  })
  it('allows negative start indexes', () => {
    const result = [...enumerate('abcde', -4.6)]
    expect(result).to.deep.equal([
      [-4, 'a'],
      [-3, 'b'],
      [-2, 'c'],
      [-1, 'd'],
      [0, 'e'],
    ])
  })
})
