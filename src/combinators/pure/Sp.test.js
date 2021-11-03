// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const { C, I, Sp } = require('combinators/pure')
const { add, div, eq, prop } = require('operators')

const sum = xs => xs.reduce(add, 0)
const rev = s => s.split('').reverse().join('')
const count = C(prop)('length')

describe("S' combinator", () => {
  it('applies two unary functions to a value, then combines them with a binary function', () => {
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
})
