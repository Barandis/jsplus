// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const I = require('combinators/pure/I')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')

describe('K combinator', () => {
  it('returns its first argument whatever the value of its second', () => {
    expect(K(1)(2)).to.equal(1)
    expect(K(S)(I)).to.equal(S)
  })
})
