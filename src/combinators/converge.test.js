// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { compose, converge, identity } = require('combinators')
const { collect, reduce, reverse } = require('iterators')
const { add, div, eq, mul, prop } = require('operators')

describe('converge', () => {
  it('applies two functions to a value and then another function to those results', () => {
    const result = converge(div)(add(1))(mul(2))(5)
    expect(result)
      .to.equal((5 + 1) / (5 * 2))
      .and.to.equal(0.6)
  })
  it('can be used to produce an average function', () => {
    const average = converge(div)(reduce(add))(prop('length'))
    expect(average([1, 2, 3, 4, 5])).to.equal(3)
    expect(average([10, 2, 8, 6, 4])).to.equal(6)
  })
  it('can be used to detect palindromes', () => {
    const isPalindrome = converge(eq)(compose(collect)(reverse))(identity)
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('testvalue')).to.be.false
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('saippuakivikauppias')).to.be.true
  })
})
