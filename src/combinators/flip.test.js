// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const flip = require('combinators/flip')
const curry = require('functions/curry')

describe('flip', () => {
  it('applies two arguments to a function in reverse order', () => {
    const sub = (x, y) => x - y
    expect(flip(sub, 3, 4)).to.equal(1)
  })
  it('can take one argument to create a function that applies an argument first', () => {
    const sub = (x, y) => x - y
    const minus3 = flip(sub, 3) // implements x => x - 3
    expect(minus3(4)).to.equal(1)
  })
  it('can take only the function to produce a flipped function', () => {
    const sub = (x, y) => x - y
    const fsub = flip(sub) // implements (x, y) => y - x
    expect(fsub(3, 7)).to.equal(4)
  })
  it('can accept a curried function', () => {
    const sub = curry((x, y) => x - y)
    expect(flip(sub)(3, 4)).to.equal(1)
  })
  it('can accept a manually curried function', () => {
    const sub = x => y => x - y
    expect(flip(sub)(3, 4)).to.equal(1)
  })
})