// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const range = require('functions/range')
const lnot = require('operators/lnot')

const { randInt } = require('test/utils')

describe('lnot', () => {
  it('logically NOTs a number', () => {
    for (const _ of range(10)) {
      // number that is either 0 or 1
      const a = randInt(0, 2)
      expect(lnot(a))
        .to.equal(!a)
        .and.to.equal(a === 0)
    }
  })
})
