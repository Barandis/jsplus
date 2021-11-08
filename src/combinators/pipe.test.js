// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose, pipe, swap } = require('combinators')
const { collect, map } = require('iterators')
const { add, mul } = require('operators')

describe('pipe', () => {
  it('composes two single-argument functions left-to-right into a new function', () => {
    const fn = pipe(mul(3))(add(1)) // Collatz-conjecturish
    const result = map(fn)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([4, 7, 10, 13, 16])
  })
  it('works the same as swap(compose)', () => {
    const fn = swap(compose)(mul(3))(add(1))
    const result = map(fn)([1, 2, 3, 4, 5])
    expect(collect(result)).to.deep.equal([4, 7, 10, 13, 16])
  })
})
