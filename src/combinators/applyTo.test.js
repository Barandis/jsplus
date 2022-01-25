// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { applyTo } = require('combinators')
const { add } = require('operators')

describe('applyTo', () => {
  it('applies a function to an argument', () => {
    const result = applyTo(3)(add)(4)
    expect(result).to.equal(7)
  })
})
