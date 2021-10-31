// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const curry = require('functions/curry')

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
  it('will not curry a function that it has already curried', () => {
    const csum = curry(sum)
    expect(csum(1, 2, 3)).to.equal(6)
    expect(csum(1, 2)(3)).to.equal(6)
    expect(csum(1)(2, 3)).to.equal(6)
    expect(csum()(1, 2, 3)).to.equal(6)
    expect(csum(1)(2)(3)).to.equal(6)
  })
  it('will not curry a function with 0 or 1 arguments', () => {
    const zeroArg = () => null
    const oneArg = x => x

    expect(curry(zeroArg)).to.equal(zeroArg)
    expect(curry(oneArg)).to.equal(oneArg)
  })
  it('will not curry a manually curried function', () => {
    const csum = a => b => c => a + b + c
    const ccsum = curry(csum)

    expect(csum).to.equal(ccsum)
    expect(ccsum(1)(2)(3)).to.equal(6)
  })
})
