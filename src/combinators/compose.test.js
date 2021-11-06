// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const compose = require('combinators/compose')
const pipe = require('combinators/pipe')
const swap = require('combinators/swap')
const array = require('iterators/array')
const map = require('iterators/map')
const add = require('operators/add')
const mul = require('operators/mul')

describe('compose', () => {
  it('composes two single-argument functions into a new function', () => {
    const fn = compose(add(1))(mul(3)) // Collatz-conjecturish
    const result = map(fn)([1, 2, 3, 4, 5])
    expect(array(result)).to.deep.equal([4, 7, 10, 13, 16])
  })
  it('works the same as swap (pipe)', () => {
    const fn = swap(pipe)(add(1))(mul(3))
    const result = map(fn)([1, 2, 3, 4, 5])
    expect(array(result)).to.deep.equal([4, 7, 10, 13, 16])
  })
})
