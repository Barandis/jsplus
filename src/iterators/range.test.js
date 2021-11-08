// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { range } = require('iterators')

describe('range', () => {
  it('produces an exclusive range using an end point', () => {
    const result = [...range(10)]
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('produces an exclusive range using start and end points', () => {
    const result = [...range(1, 10)]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('produces an exclusive range using start, end, and step', () => {
    const result = [...range(1, 11, 2)]
    expect(result).to.deep.equal([1, 3, 5, 7, 9])
  })
  it('produces an inclusive range using an end point', () => {
    const result = [...range(10, true)]
    expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('produces an inclusive range using start and end points', () => {
    const result = [...range(1, 10, true)]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('produces an inclusive range using start, end, and step', () => {
    const result = [...range(1, 11, 2, true)]
    expect(result).to.deep.equal([1, 3, 5, 7, 9, 11])
  })
  it('produces exclusive reverse ranges using an end point', () => {
    const result = [...range(-5)]
    expect(result).to.deep.equal([0, -1, -2, -3, -4])
  })
  it('produces exclusive reverse ranges using start and end points', () => {
    const result = [...range(10, 0)]
    expect(result).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
  })
  it('produces exclusive reverse ranges using start, end, and step', () => {
    const result = [...range(10, 0, 2)]
    expect(result).to.deep.equal([10, 8, 6, 4, 2])
  })
  it('produces inclusive reverse ranges using an end point', () => {
    const result = [...range(-5, true)]
    expect(result).to.deep.equal([0, -1, -2, -3, -4, -5])
  })
  it('produces inclusive reverse ranges using start and end points', () => {
    const result = [...range(10, 0, true)]
    expect(result).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
  })
  it('produces exclusive reverse ranges using start, end, and step', () => {
    const result = [...range(10, 0, 2, true)]
    expect(result).to.deep.equal([10, 8, 6, 4, 2, 0])
  })
  it('is equal in inclusive/exclusive if end is not part of range', () => {
    const exclusive = [...range(1, 10, 2)]
    expect(exclusive).to.deep.equal([1, 3, 5, 7, 9])
    const inclusive = [...range(1, 10, 2, true)]
    expect(inclusive).to.deep.equal([1, 3, 5, 7, 9])
  })
  it('can use floating point numbers', () => {
    const result = [...range(0.5, 2.5, 0.5)]
    expect(result).to.deep.equal([0.5, 1.0, 1.5, 2.0])
  })
  it('rejects steps of 0 and regards them as 1 instead', () => {
    const result = [...range(1, 10, 0)]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it('rejects negative steps and regards them as positive instead', () => {
    const result = [...range(1, 10, -1)]
    expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
