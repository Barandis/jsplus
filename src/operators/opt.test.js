// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand, randInt } = require('test/utils')

const swap = require('combinators/swap')
const range = require('iterators/range')
const opt = require('operators/opt')

describe('opt', () => {
  it('returns the value of a property or an index of an array', () => {
    for (const _ of range(10)) {
      const a = [...range(randInt(3, 7))].map(() => rand(-1000, 1000))
      for (const i of range(a.length)) {
        expect(opt(a, i)).to.equal(opt(a)(i)).and.to.equal(a?.[i])
      }
      expect(opt(a, 'length')).to.equal(opt(a)('length')).and.to.equal(a?.length)
    }
  })
  it('returns undefined if its object does not exist', () => {
    const a = null
    const b = undefined
    /* eslint-disable no-unused-expressions */
    expect(opt(a, 1)).to.equal(opt(a)(1)).and.to.equal(a?.[1]).and.to.be.undefined
    expect(opt(b, 'length')).to.equal(opt(b)('length')).and.to.equal(b?.length).and.to.be.undefined
    /* eslint-enable no-unused-expressions */
  })
  it('applies a right argument with swap', () => {
    const count = swap(opt, 'length')
    for (const _ of range(10)) {
      const a = [...range(randInt(3, 7))].map(() => rand(-1000, 1000))
      expect(count(a)).to.equal(a?.length)
    }
  })
})
