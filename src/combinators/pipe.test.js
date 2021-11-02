// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const swap = require('combinators/swap')
const pipe = require('combinators/pipe')
const curry = require('functions/curry')

const inc = x => x + 1
const odd = x => x % 2 !== 0

describe('pipe', () => {
  it('pipes two or more functions into a single function', () => {
    const m = fn => iterable => Array.from(iterable).map(fn)
    const f = fn => iterable => Array.from(iterable).filter(fn)
    const t = n => iterable => Array.from(iterable).slice(0, n)

    const result = pipe(m(inc), f(odd), t(2))([0, 1, 2, 3, 4])
    expect(result).to.deep.equal([1, 3])
  })
  it('works in conjunction with curry and swap', () => {
    const map = (iterable, fn) => Array.from(iterable).map(fn)
    const filter = (iterable, fn) => Array.from(iterable).filter(fn)
    const take = (iterable, n) => Array.from(iterable).slice(0, n)

    const result = pipe(
      swap(curry(map))(inc),
      swap(curry(filter))(odd),
      swap(curry(take))(2),
    )([0, 1, 2, 3, 4])
    expect(result).to.deep.equal([1, 3])
  })
})
