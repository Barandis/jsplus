// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const swap = require('combinators/swap')
const range = require('functions/range')
const prop = require('operators/prop')

const { rand, randInt } = require('test/utils')

describe('prop', () => {
  it('returns the value of a property or an index of an array', () => {
    for (const _ of range(10)) {
      const a = [...range(randInt(3, 7))].map(() => rand(-1000, 1000))
      for (const i of range(a.length)) {
        expect(prop(a, i)).to.equal(prop(a)(i)).and.to.equal(a[i])
      }
      expect(prop(a, 'length')).to.equal(prop(a)('length')).and.to.equal(a.length)
    }
  })
  it('applies a right argument with swap', () => {
    const count = swap(prop, 'length')
    for (const _ of range(10)) {
      const a = [...range(randInt(3, 7))].map(() => rand(-1000, 1000))
      expect(count(a)).to.equal(a.length)
    }
  })
})
