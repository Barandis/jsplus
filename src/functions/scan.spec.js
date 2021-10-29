// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')
const scan = require('./scan')

function* upTo5() {
  for (let i = 0; i <= 5; i += 1) {
    yield i
  }
}

describe('scan', () => {
  it('collects the intermediate results from a reduction', () => {
    const result = scan([0, 1, 2, 3, 4, 5], (a, b) => a + b, 0)
    expect(result).to.deep.equal([0, 1, 3, 6, 10, 15])
  })
  it('works with strings', () => {
    const result = scan('test', (a, b) => a + b.toUpperCase(), '')
    expect(result).to.deep.equal(['T', 'TE', 'TES', 'TEST'])
  })
  it('works with iterators', () => {
    const result = scan(upTo5(), (a, b) => a + b, 0)
    expect(result).to.deep.equal([0, 1, 3, 6, 10, 15])
  })
})
