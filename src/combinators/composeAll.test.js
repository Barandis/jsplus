// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { composeAll, swap } = require('combinators')
const { curry } = require('functions')
const { add, ne, rem } = require('operators')

const inc = add(1)
const odd = composeAll(ne(0), swap(rem)(2))

describe('composeAll', () => {
  it('composes two or more functions into a single function', () => {
    const m = fn => iterable => Array.from(iterable).map(fn)
    const f = fn => iterable => Array.from(iterable).filter(fn)
    const t = n => iterable => Array.from(iterable).slice(0, n)

    const result = composeAll(t(2), f(odd), m(inc))([0, 1, 2, 3, 4])
    expect(result).to.deep.equal([1, 3])
  })
  it('works in conjunction with curry and swap', () => {
    const map = (iterable, fn) => Array.from(iterable).map(fn)
    const filter = (iterable, fn) => Array.from(iterable).filter(fn)
    const take = (iterable, n) => Array.from(iterable).slice(0, n)

    const result = composeAll(
      swap(curry(take))(2),
      swap(curry(filter))(odd),
      swap(curry(map))(inc),
    )([0, 1, 2, 3, 4])
    expect(result).to.deep.equal([1, 3])
  })
})
