// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { B, C, I, Sp, W } = require('combinators/pure')
const { reduce, reverse } = require('iterators')
const { add, div, eq, prop } = require('operators')

const sum = reduce(add)
const rev = B(reduce(add))(reverse)
const count = prop('length')

describe("S' combinator", () => {
  it('applies two unary functions to a value, then combines them with a binary function', () => {
    // This is better done with S because it doesn't require the I, but this is just a test
    const isPalindrome = Sp(eq)(I)(rev)
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('hello')).to.be.false
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('radar')).to.be.true
  })
  it('makes a nice averages function', () => {
    const avg = Sp(div)(sum)(count)
    expect(avg([1, 2, 3, 4, 5])).to.equal(3)
  })
  it('can be constructed from B(B(B(BW)(BBC)))B', () => {
    const sp = B(B(B(B(W))(B(B)(C))))(B)
    const isPalindrome = sp(eq)(I)(rev)
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('hello')).to.be.false
    // eslint-disable-next-line no-unused-expressions
    expect(isPalindrome('radar')).to.be.true
  })
})
