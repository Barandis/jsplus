// Copyright (c) 2022 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { fix } = require('combinators')

describe('fix', () => {
  it('produces a factorial from a non-recursive function', () => {
    const nrfact = f => x => x < 1 ? 1 : x * f(x - 1)
    const fact = fix(nrfact)
    expect(fact(1)).to.equal(1)
    expect(fact(5)).to.equal(120)
    expect(fact(10)).to.equal(3628800)
  })
  it('produces Fibonacci numbers from a non-recursive function', () => {
    const nrfib = f => x => x < 3 ? 1 : f(x - 1) + f(x - 2)
    const fib = fix(nrfib)
    expect(fib(1)).to.equal(1)
    expect(fib(5)).to.equal(5)
    expect(fib(10)).to.equal(55)
  })
})
