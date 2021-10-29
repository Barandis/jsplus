// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/common')
const curry = require('./curry')

describe('curry', () => {
  const sum = curry((a, b, c) => a + b + c)

  it('works when passing all arguments', () => {
    const result = sum(1, 2, 3)
    expect(result).to.equal(6)
  })
  it('works when passing one less argument', () => {
    const result = sum(1, 2)(3)
    expect(result).to.equal(6)
  })
  it('works when passing two less arguments', () => {
    const result = sum(1)(2, 3)
    expect(result).to.equal(6)
  })
  it('works when passing no arguments', () => {
    const result = sum()(1, 2, 3)
    expect(result).to.equal(6)
  })
  it('works when all arguments are passed separately', () => {
    const result = sum(1)(2)(3)
    expect(result).to.equal(6)
  })
})
