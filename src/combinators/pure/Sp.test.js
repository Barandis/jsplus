// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const compose = require('combinators/compose')
const swap = require('combinators/swap')
const I = require('combinators/pure/I')
const Sp = require('combinators/pure/Sp')
const reduce = require('iterators/reduce')
const reverse = require('iterators/reverse')
const add = require('operators/add')
const div = require('operators/div')
const eq = require('operators/eq')
const prop = require('operators/prop')

const sum = reduce(add)
const rev = compose(reduce(add))(reverse)
const count = swap(prop)('length')

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
