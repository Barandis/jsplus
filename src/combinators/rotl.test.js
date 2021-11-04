// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const rotl = require('combinators/rotl')
const curry = require('functions/curry')

describe('rotl', () => {
  it('applies three arguments to a function in left-rotated order', () => {
    const sub = (x, y, z) => x - y - z
    expect(rotl(sub, 3, 4, 5)).to.equal(-4)
  })
  it('can take one argument to create a function that applies the argument last', () => {
    const sub = (x, y, z) => x - y - z
    const minus3 = rotl(sub, 3) // implements (y, z) => y - z - 3
    expect(minus3(4, 5)).to.equal(-4)
  })
  it('can take only the function to produce a left-rotated function', () => {
    const sub = (x, y, z) => x - y - z
    const rsub = rotl(sub) // implements (x, y, z) => y - z - x
    expect(rsub(3, 4, 5)).to.equal(-4)
  })
  it('can accept a curried function', () => {
    const sub = curry((x, y, z) => x - y - z)
    expect(rotl(sub)(3, 4, 5)).to.equal(-4)
  })
  it('can accept a manually curried function', () => {
    const sub = x => y => z => x - y - z
    expect(rotl(sub)(3, 4, 5)).to.equal(-4)
  })
})
