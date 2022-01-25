// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { apply } = require('combinators')
const { add } = require('operators')

describe('apply', () => {
  it('applies a function to an argument', () => {
    const result = apply(add)(3)(4)
    expect(result).to.equal(7)
  })
})
