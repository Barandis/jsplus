// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const B = require('combinators/pure/B')
const K = require('combinators/pure/K')
const S = require('combinators/pure/S')
const add = require('operators/add')
const mul = require('operators/mul')

describe('B combinator', () => {
  it('composes single-argument functions', () => {
    expect(B(mul(4))(add(2))(7))
      .to.equal(4 * (2 + 7))
      .and.to.equal(36)
  })
  it('can be constructed from S(KS)K', () => {
    const b = S(K(S))(K)
    expect(b(mul(4))(add(2))(7)).to.equal(36)
  })
})
