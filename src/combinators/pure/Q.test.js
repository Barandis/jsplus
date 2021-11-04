// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const K = require('combinators/pure/K')
const Q = require('combinators/pure/Q')
const S = require('combinators/pure/S')
const add = require('operators/add')
const mul = require('operators/mul')

describe('B combinator', () => {
  it('composes single-argument functions left-to-right', () => {
    expect(Q(mul(4))(add(2))(7))
      .to.equal(4 * 7 + 2)
      .and.to.equal(30)
  })
  it('can be constructed from S(K(S(S(KS)K)))K', () => {
    const q = S(K(S(S(K(S))(K))))(K)
    expect(q(mul(4))(add(2))(7)).to.equal(30)
  })

  it('can be constructed from CB', () => {
    const q = C(B)
    expect(q(mul(4))(add(2))(7)).to.equal(30)
  })
})
