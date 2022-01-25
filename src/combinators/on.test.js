// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { on } = require('combinators')
const { add, mul, prop } = require('operators')

describe('on', () => {
  it('applies a function to the results of another function applied to two args', () => {
    const double = mul(2)
    const result = on(add)(double)(3)(4)
    expect(result)
      .to.equal(3 * 2 + 4 * 2)
      .and.to.equal(14)
  })
  it('is useful for getting properties of objects to calculate with', () => {
    const size = prop('length')
    const compare = (a, b) => (a < b ? 'second' : 'first')
    const longest = on(compare)(size)

    const ex1 = longest([1, 2, 3])([1, 2, 3, 4])
    const ex2 = longest([1, 2, 3])([1, 2])

    expect(ex1).to.equal('second')
    expect(ex2).to.equal('first')
  })
})
