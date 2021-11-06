// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const compose = require('combinators/compose')
const substitute = require('combinators/substitute')
const swap = require('combinators/swap')
const reduce = require('iterators/reduce')
const reverse = require('iterators/reverse')
const add = require('operators/add')
const eq = require('operators/eq')
const mul = require('operators/mul')
const prop = require('operators/prop')
const sub = require('operators/sub')

describe('substitute', () => {
  it('applies a fn to a value and the result of another fn applied to that value', () => {
    const result = substitute(mul)(add(1))(4) // a number times that number plus 1
    expect(result)
      .to.equal(4 * (4 + 1))
      .and.to.equal(20)
  })
  it('can be used to look up the last element of an array', () => {
    const lastElement = substitute(prop)(compose(swap(sub)(1))(swap(prop)('length')))
    const result = lastElement([1, 3, 5, 7, 9])
    expect(result).to.equal(9)
  })
  it('can be used to detect palindromes', () => {
    // This is actually better than using `converge` because it doesn't require `identity`
    const isPalindrome = substitute(eq)(compose(reduce(add))(reverse))
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('testvalue')).to.be.false
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('saippuakivikauppias')).to.be.true
  })
})