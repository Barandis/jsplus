// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const swap = require('combinators/swap')
const range = require('functions/range')
const coal = require('operators/coal')

const { rand } = require('test/utils')

describe('coal', () => {
  it('returns its first argument or, if null or undefined, its second', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      expect(coal(32768, a)).to.equal(coal(32768)(a)).to.equal(32768)
      expect(coal(null, a)).to.equal(coal(null)(a)).to.equal(a)
      expect(coal(undefined, a)).to.equal(coal(undefined)(a)).to.equal(a)
    }
  })
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const orDef = swap(coal, a)
      expect(orDef(32768)).to.equal(32768)
      expect(orDef(null)).to.equal(a)
      expect(orDef(undefined)).to.equal(a)
    }
  })
})