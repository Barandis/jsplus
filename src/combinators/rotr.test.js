// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const { rotr } = require('combinators')
const { curry } = require('functions')

describe('rotr', () => {
  it('applies three arguments to a function in right-rotated order', () => {
    const sub = (x, y, z) => x - y - z
    expect(rotr(sub, 3, 4, 5)).to.equal(-2)
  })
  it('can take two arguments to create a function that applies the remaining arg first', () => {
    const sub = (x, y, z) => x - y - z
    const minus3and4 = rotr(sub, 3, 4) // implements z => z - 3 - 4
    expect(minus3and4(5)).to.equal(-2)
  })
  it('can take only the function to produce a right-rotated function', () => {
    const sub = (x, y, z) => x - y - z
    const rsub = rotr(sub) // implements (x, y, z) => z - x - y
    expect(rsub(3, 4, 5)).to.equal(-2)
  })
  it('can accept a curried function', () => {
    const sub = curry((x, y, z) => x - y - z)
    expect(rotr(sub)(3, 4, 5)).to.equal(-2)
  })
  it('can accept a manually curried function', () => {
    const sub = x => y => z => x - y - z
    expect(rotr(sub)(3, 4, 5)).to.equal(-2)
  })
})
