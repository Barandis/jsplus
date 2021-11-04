// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const infinite = require('iterators/infinite')
const range = require('iterators/range')

describe('infinite', () => {
  it('creates an infinite iterator starting at 0 and increasing by 1', () => {
    const iter = infinite()
    for (const i of range(20)) {
      expect(iter.next().value).to.equal(i)
    }
  })
  it('can change its starting point', () => {
    const iter = infinite(10)
    for (const i of range(10, 30)) {
      expect(iter.next().value).to.equal(i)
    }
  })
  it('can change the step value', () => {
    const iter = infinite(0, 3)
    for (const i of range(0, 60, 3)) {
      expect(iter.next().value).to.equal(i)
    }
  })
})
