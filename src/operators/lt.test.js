// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect, rand } = require('test/utils')

const swap = require('combinators/swap')
const range = require('iterators/range')
const lt = require('operators/lt')

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
  it('applies a right operand with swap', () => {
    for (const _ of range(10)) {
      const a = rand(-1000, 1000)
      const b = rand(-1000, 1000)
      const lta = swap(lt)(a)
      expect(lta(b)).to.equal(b < a)
    }
  })
})
