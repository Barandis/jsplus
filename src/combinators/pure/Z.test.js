// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { Z } = require('combinators/pure')
const { range } = require('iterators')

const fact = x => (x < 1 ? 1 : x * fact(x - 1))
const zfact = f => x => x < 1 ? 1 : x * f(x - 1)

describe('Z combinator', () => {
  it('produces a recursive factorial function from a non-recursive one', () => {
    for (const x of range(10)) {
      const f1 = fact(x)
      const f2 = Z(zfact)(x)
      expect(f1).to.equal(f2)
    }
  })
})
