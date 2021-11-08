// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { collect } = require('iterators')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('collect', () => {
  it('collects array elements into an array', () => {
    const result = collect([1, 2, 3, 4, 5])
    expect(result).to.deep.equal([1, 2, 3, 4, 5])
  })
  it('collects strings into a string', () => {
    const result = collect('testing')
    expect(result).to.equal('testing')
  })
  it('collects objects into an object', () => {
    const result = collect({ a: 1, b: 2, c: 3 })
    expect(result).to.deep.equal({ a: 1, b: 2, c: 3 })
  })
  it('collects iterators into an array', () => {
    const result = collect(upTo5())
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5])
  })
  it('collects function results into an array', () => {
    const result = collect(x => (x < 5 ? x : undefined))
    expect(result).to.deep.equal([0, 1, 2, 3, 4])
  })
  it('collects arrays of strings into a string', () => {
    const result = collect(['t', 'e', 's', 't', 'i', 'n', 'g'])
    expect(result).to.equal('testing')
  })
  it('collects string function results into a string', () => {
    const result = collect(x => (x < 5 ? x.toString() : undefined))
    expect(result).to.equal('01234')
  })
  it('collects arrays of two-element arrays into an object', () => {
    const result = collect([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])
    expect(result).to.deep.equal({ a: 1, b: 2, c: 3 })
  })
  it('collects two-element array function results into an object', () => {
    const result = collect(x => (x < 5 ? [String.fromCharCode(x + 97), x] : undefined))
    expect(result).to.deep.equal({ a: 0, b: 1, c: 2, d: 3, e: 4 })
  })
  it('collects single values into a single-element array or one-char string', () => {
    expect(collect(4)).to.deep.equal([4])
    expect(collect('a')).to.equal('a')
  })
})
