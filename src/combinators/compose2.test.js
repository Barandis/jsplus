// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose2, on, rotr } = require('combinators')
const { add, cond, mul, lt, prop } = require('operators')

describe('compose2', () => {
  it('composes a binary function with a unary one', () => {
    const doubleSum = compose2(mul(2))(add)
    const result = doubleSum(5)(6)
    expect(result)
      .to.equal(2 * (5 + 6))
      .and.to.equal(22)
  })
  it('is useful with binary operator functions', () => {
    const size = prop('length')
    const compare = compose2(rotr(cond)('second')('first'))(lt)
    const longest = on(compare)(size)

    const ex1 = longest([1, 2, 3])([1, 2, 3, 4])
    const ex2 = longest([1, 2, 3])([1, 2])

    expect(ex1).to.equal('second')
    expect(ex2).to.equal('first')
  })
})
