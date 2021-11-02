// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const range = require('functions/range')
const lt = require('operators/lt')
const { rand } = require('./test_utils')

describe('lt', () => {
  it('tests two numbers for less than', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)

      // eslint-disable-next-line no-unused-expressions
      expect(lt(a, a)).to.equal(lt(a)(a)).and.to.be.false
      expect(lt(a, b))
        .to.equal(lt(a)(b))
        .to.equal(a < b)
    }
  })
})
