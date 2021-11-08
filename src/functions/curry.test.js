// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { curry } = require('functions')

describe('curryn', () => {
  it('will return a 0-arg function', () => {
    const fn = () => 0
    expect(curry(fn)).to.equal(fn)
  })
  it('will return a 1-arg function', () => {
    const fn = x => x
    expect(curry(fn)).to.equal(fn)
  })
  it('will curry a 2-arg function', () => {
    const sum = curry((x, y) => x + y)
    expect(sum(1)).to.be.a('function')
    expect(sum(1, 2)).to.be.a('function')
    expect(sum(1)(2)).to.equal(3)
  })
  it('will curry a 3-arg function', () => {
    const sum = curry((x, y, z) => x + y + z)

    expect(sum(1)).to.be.a('function')
    expect(sum(1)(2)).to.be.a('function')
    expect(sum(1)(2, 3)).to.be.a('function')
    expect(sum(1, 2)).to.be.a('function')
    expect(sum(1, 2)(3)).to.be.a('function')
    expect(sum(1, 2, 3)).to.be.a('function')
    expect(sum(1)(2)(3)).to.equal(6)
  })
  it('will curry a 4-arg function', () => {
    const sum = curry((x, y, z, w) => x + y + z + w)

    expect(sum(1)).to.be.a('function')
    expect(sum(1)(2)).to.be.a('function')
    expect(sum(1)(2)(3)).to.be.a('function')
    expect(sum(1)(2)(3, 4)).to.be.a('function')
    expect(sum(1)(2, 3)).to.be.a('function')
    expect(sum(1)(2, 3)(4)).to.be.a('function')
    expect(sum(1)(2, 3, 4)).to.be.a('function')
    expect(sum(1, 2)).to.be.a('function')
    expect(sum(1, 2)(3)).to.be.a('function')
    expect(sum(1, 2)(3)(4)).to.be.a('function')
    expect(sum(1, 2)(3, 4)).to.be.a('function')
    expect(sum(1, 2, 3)).to.be.a('function')
    expect(sum(1, 2, 3)(4)).to.be.a('function')
    expect(sum(1, 2, 3, 4)).to.be.a('function')
    expect(sum(1)(2)(3)(4)).to.equal(10)
  })
  it('will curry a 5-arg function', () => {
    const sum = curry((x, y, z, w, v) => x + y + z + w + v)

    expect(sum(1)).to.be.a('function')
    expect(sum(1)(2)).to.be.a('function')
    expect(sum(1)(2)(3)).to.be.a('function')
    expect(sum(1)(2)(3)(4)).to.be.a('function')
    expect(sum(1)(2)(3)(4, 5)).to.be.a('function')
    expect(sum(1)(2)(3, 4)).to.be.a('function')
    expect(sum(1)(2)(3, 4)(5)).to.be.a('function')
    expect(sum(1)(2)(3, 4, 5)).to.be.a('function')
    expect(sum(1)(2, 3)).to.be.a('function')
    expect(sum(1)(2, 3)(4)).to.be.a('function')
    expect(sum(1)(2, 3)(4)(5)).to.be.a('function')
    expect(sum(1)(2, 3)(4, 5)).to.be.a('function')
    expect(sum(1)(2, 3, 4)).to.be.a('function')
    expect(sum(1)(2, 3, 4)(5)).to.be.a('function')
    expect(sum(1)(2, 3, 4, 5)).to.be.a('function')
    expect(sum(1, 2)).to.be.a('function')
    expect(sum(1, 2)(3)).to.be.a('function')
    expect(sum(1, 2)(3)(4)).to.be.a('function')
    expect(sum(1, 2)(3)(4)(5)).to.be.a('function')
    expect(sum(1, 2)(3)(4, 5)).to.be.a('function')
    expect(sum(1, 2)(3, 4)).to.be.a('function')
    expect(sum(1, 2)(3, 4)(5)).to.be.a('function')
    expect(sum(1, 2)(3, 4, 5)).to.be.a('function')
    expect(sum(1, 2, 3)).to.be.a('function')
    expect(sum(1, 2, 3)(4)).to.be.a('function')
    expect(sum(1, 2, 3)(4)(5)).to.be.a('function')
    expect(sum(1, 2, 3)(4, 5)).to.be.a('function')
    expect(sum(1, 2, 3, 4)).to.be.a('function')
    expect(sum(1, 2, 3, 4)(5)).to.be.a('function')
    expect(sum(1, 2, 3, 4, 5)).to.be.a('function')
    expect(sum(1)(2)(3)(4)(5)).to.equal(15)
  })
  it('will curry a 6-arg function', () => {
    const sum = curry((x, y, z, w, v, u) => x + y + z + w + v + u)

    expect(sum(1)).to.be.a('function')
    expect(sum(1)(2)).to.be.a('function')
    expect(sum(1)(2)(3)).to.be.a('function')
    expect(sum(1)(2)(3)(4)).to.be.a('function')
    expect(sum(1)(2)(3)(4)(5)).to.be.a('function')
    expect(sum(1)(2)(3)(4)(5, 6)).to.be.a('function')
    expect(sum(1)(2)(3)(4, 5)).to.be.a('function')
    expect(sum(1)(2)(3)(4, 5)(6)).to.be.a('function')
    expect(sum(1)(2)(3)(4, 5, 6)).to.be.a('function')
    expect(sum(1)(2)(3, 4)).to.be.a('function')
    expect(sum(1)(2)(3, 4)(5)).to.be.a('function')
    expect(sum(1)(2)(3, 4)(5)(6)).to.be.a('function')
    expect(sum(1)(2)(3, 4)(5, 6)).to.be.a('function')
    expect(sum(1)(2)(3, 4, 5)).to.be.a('function')
    expect(sum(1)(2)(3, 4, 5)(6)).to.be.a('function')
    expect(sum(1)(2)(3, 4, 5, 6)).to.be.a('function')
    expect(sum(1)(2, 3)).to.be.a('function')
    expect(sum(1)(2, 3)(4)).to.be.a('function')
    expect(sum(1)(2, 3)(4)(5)).to.be.a('function')
    expect(sum(1)(2, 3)(4)(5)(6)).to.be.a('function')
    expect(sum(1)(2, 3)(4)(5, 6)).to.be.a('function')
    expect(sum(1)(2, 3)(4, 5)).to.be.a('function')
    expect(sum(1)(2, 3)(4, 5)(6)).to.be.a('function')
    expect(sum(1)(2, 3)(4, 5, 6)).to.be.a('function')
    expect(sum(1)(2, 3, 4)).to.be.a('function')
    expect(sum(1)(2, 3, 4)(5)).to.be.a('function')
    expect(sum(1)(2, 3, 4)(5)(6)).to.be.a('function')
    expect(sum(1)(2, 3, 4)(5, 6)).to.be.a('function')
    expect(sum(1)(2, 3, 4, 5)).to.be.a('function')
    expect(sum(1)(2, 3, 4, 5)(6)).to.be.a('function')
    expect(sum(1)(2, 3, 4, 5, 6)).to.be.a('function')
    expect(sum(1, 2)).to.be.a('function')
    expect(sum(1, 2)(3)).to.be.a('function')
    expect(sum(1, 2)(3)(4)).to.be.a('function')
    expect(sum(1, 2)(3)(4)(5)).to.be.a('function')
    expect(sum(1, 2)(3)(4)(5)(6)).to.be.a('function')
    expect(sum(1, 2)(3)(4)(5, 6)).to.be.a('function')
    expect(sum(1, 2)(3)(4, 5)).to.be.a('function')
    expect(sum(1, 2)(3)(4, 5)(6)).to.be.a('function')
    expect(sum(1, 2)(3)(4, 5, 6)).to.be.a('function')
    expect(sum(1, 2)(3, 4)).to.be.a('function')
    expect(sum(1, 2)(3, 4)(5)).to.be.a('function')
    expect(sum(1, 2)(3, 4)(5)(6)).to.be.a('function')
    expect(sum(1, 2)(3, 4)(5, 6)).to.be.a('function')
    expect(sum(1, 2)(3, 4, 5)).to.be.a('function')
    expect(sum(1, 2)(3, 4, 5)(6)).to.be.a('function')
    expect(sum(1, 2)(3, 4, 5, 6)).to.be.a('function')
    expect(sum(1, 2, 3)).to.be.a('function')
    expect(sum(1, 2, 3)(4)).to.be.a('function')
    expect(sum(1, 2, 3)(4)(5)).to.be.a('function')
    expect(sum(1, 2, 3)(4)(5)(6)).to.be.a('function')
    expect(sum(1, 2, 3)(4)(5, 6)).to.be.a('function')
    expect(sum(1, 2, 3)(4, 5)).to.be.a('function')
    expect(sum(1, 2, 3)(4, 5)(6)).to.be.a('function')
    expect(sum(1, 2, 3)(4, 5, 6)).to.be.a('function')
    expect(sum(1, 2, 3, 4)).to.be.a('function')
    expect(sum(1, 2, 3, 4)(5)).to.be.a('function')
    expect(sum(1, 2, 3, 4)(5)(6)).to.be.a('function')
    expect(sum(1, 2, 3, 4)(5, 6)).to.be.a('function')
    expect(sum(1, 2, 3, 4, 5)).to.be.a('function')
    expect(sum(1, 2, 3, 4, 5)(6)).to.be.a('function')
    expect(sum(1, 2, 3, 4, 5, 6)).to.be.a('function')
    expect(sum(1)(2)(3)(4)(5)(6)).to.equal(21)
  })
})
