// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* eslint-disable max-classes-per-file, no-unused-expressions */

const { expect } = require('test/utils')

const { array, iterate, range } = require('iterators')

function* five() {
  for (const i of range(1, 6)) {
    yield i
  }
}

describe('iterate', () => {
  context('over built-in iterable types', () => {
    context('allowing built-in iterator protocol usage', () => {
      it('iterates over strings', () => {
        const result = array(iterate('hello'))
        expect(result).to.deep.equal(['h', 'e', 'l', 'l', 'o'])
      })

      it('iterates over arrays', () => {
        const result = array(iterate([3, 1, 4, 1, 5]))
        expect(result).to.deep.equal([3, 1, 4, 1, 5])
      })

      it('iterates over generators', () => {
        const result = array(iterate(five()))
        expect(result).to.deep.equal([1, 2, 3, 4, 5])
      })
    })
  })

  context('over custom iterable types', () => {
    it('iterates over types with custom iterator protocols', () => {
      class IteratorTest {
        constructor() {
          const values = [3, 1, 4, 1, 5]

          this[Symbol.iterator] = function* iterator() {
            for (const value of values) {
              yield value
            }
          }
        }
      }
      const test = new IteratorTest()
      expect(array(iterate(test))).to.deep.equal([3, 1, 4, 1, 5])
    })
  })

  context('over plain objects', () => {
    const obj = { c: 1, 1: 2 }
    // Add an enumerable symbol-keyed property (it still won't be in the iterator)
    Object.defineProperty(obj, Symbol('key'), {
      enumerable: true,
      value: 3,
    })

    it('produces key-value pairs in natural object property order', () => {
      expect(array(iterate(obj))).to.deep.equal([
        ['1', 2],
        ['c', 1],
      ])
    })
  })

  context('over functions', () => {
    function expectWithin(value, expected, tolerance = 0.001) {
      expect(value).to.be.within(expected - tolerance, expected + tolerance)
    }

    it('produces an infinite repeating series with a constant function', () => {
      const iter = iterate(() => 6) // Bert's favorite number
      expect(iter.next().value).to.equal(6)
      expect(iter.next().value).to.equal(6)
      expect(iter.next().value).to.equal(6)
      expect(iter.next().value).to.equal(6)
      expect(iter.next().done).to.be.false
    })

    it('produces an infinite series based on the current index', () => {
      const iter = iterate(index => 1 / 2 ** index)
      expect(iter.next().value).to.equal(1)
      expectWithin(iter.next().value, 1 / 2)
      expectWithin(iter.next().value, 1 / 4)
      expectWithin(iter.next().value, 1 / 8)
    })

    it('produces an infinite series by feeding back the last value to the next iteration', () => {
      const fn = (index, last = true) => !last
      const iter = iterate(fn)
      expect(iter.next().value).to.be.false
      expect(iter.next().value).to.be.true
      expect(iter.next().value).to.be.false
      expect(iter.next().value).to.be.true
      expect(iter.next().value).to.be.false
    })

    it('produces an infinite series by using both the index and the last value', () => {
      const fn = (index, last = 1) => last * (index + 1) // Factorial series
      const iter = iterate(fn)
      expect(iter.next().value).to.equal(1)
      expect(iter.next().value).to.equal(2)
      expect(iter.next().value).to.equal(6)
      expect(iter.next().value).to.equal(24)
      expect(iter.next().value).to.equal(120)
    })

    it('produces a finite series if the function at some point returns `undefined`', () => {
      const fn = index => (index < 3 ? index : undefined)
      const iter = iterate(fn)
      expect(iter.next().value).to.equal(0)
      expect(iter.next().value).to.equal(1)
      expect(iter.next().value).to.equal(2)
      expect(iter.next().done).to.be.true
    })
  })

  it('returns a single-value iterator with any other type', () => {
    const date = new Date()
    const iter = iterate(date)
    expect(iter.next().value).to.equal(date)
    expect(iter.next().done).to.be.true
  })
})
