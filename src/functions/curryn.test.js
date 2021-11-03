// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('chai')

const curryn = require('functions/curryn')

const sum = (...ns) => ns.reduce((a, b) => a + b, 0)

describe('curryn', () => {
  describe('with 1 argument', () => {
    const sum1 = curryn(1, sum)

    it('works when passing a single argument', () => {
      const result = sum1(1)
      expect(result).to.equal(1)
    })
    it('works when passing multiple arguments because currying 1 does nothing', () => {
      const result = sum1(1, 2, 3, 4, 5)
      expect(result).to.equal(15)
    })
  })

  describe('with 2 arguments', () => {
    const sum2 = curryn(2, sum)

    it('works when passing single arguments', () => {
      const result = sum2(1)(2)
      expect(result).to.equal(3)
    })
    it('returns a function when passed only 1 argument', () => {
      const sum1 = sum2(1)
      expect(sum1(2)).to.equal(3)
    })
  })

  describe('with 3 arguments', () => {
    const sum3 = curryn(3, sum)

    it('works when passing single arguments', () => {
      const result = sum3(1)(2)(3)
      expect(result).to.equal(6)
    })
    it('returns a function when passed only 2 arguments', () => {
      const sum12 = sum3(1)(2)
      expect(sum12(3)).to.equal(6)
    })
    it('returns a function when passed only 1 argument', () => {
      const sum1 = sum3(1)
      expect(sum1(2)(3)).to.equal(6)
    })
  })

  describe('with 4 arguments', () => {
    const sum4 = curryn(4, sum)

    it('works when passing single arguments', () => {
      const result = sum4(1)(2)(3)(4)
      expect(result).to.equal(10)
    })
    it('returns a function when passed only 3 arguments', () => {
      const sum123 = sum4(1)(2)(3)
      expect(sum123(4)).to.equal(10)
    })
    it('returns a function when passed only 2 arguments', () => {
      const sum12 = sum4(1)(2)
      expect(sum12(3)(4)).to.equal(10)
    })
    it('returns a function when passed only 1 argument', () => {
      const sum1 = sum4(1)
      expect(sum1(2)(3)(4)).to.equal(10)
    })
  })

  describe('with 5 arguments', () => {
    const sum5 = curryn(5, sum)

    it('works when passing single arguments', () => {
      const result = sum5(1)(2)(3)(4)(5)
      expect(result).to.equal(15)
    })
    it('returns a function when passed only 4 arguments', () => {
      const sum1234 = sum5(1)(2)(3)(4)
      expect(sum1234(5)).to.equal(15)
    })
    it('returns a function when passed only 3 arguments', () => {
      const sum123 = sum5(1)(2)(3)
      expect(sum123(4)(5)).to.equal(15)
    })
    it('returns a function when passed only 2 arguments', () => {
      const sum12 = sum5(1)(2)
      expect(sum12(3)(4)(5)).to.equal(15)
    })
    it('returns a function when passed only 1 argument', () => {
      const sum1 = sum5(1)
      expect(sum1(2)(3)(4)(5)).to.equal(15)
    })
  })

  describe('with 6 arguments', () => {
    const sum6 = curryn(6, sum)

    it('works when passing single arguments', () => {
      const result = sum6(1)(2)(3)(4)(5)(6)
      expect(result).to.equal(21)
    })
    it('returns a function when passed only 5 arguments', () => {
      const sum12345 = sum6(1)(2)(3)(4)(5)
      expect(sum12345(6)).to.equal(21)
    })
    it('returns a function when passed only 4 arguments', () => {
      const sum1234 = sum6(1)(2)(3)(4)
      expect(sum1234(5)(6)).to.equal(21)
    })
    it('returns a function when passed only 3 arguments', () => {
      const sum123 = sum6(1)(2)(3)
      expect(sum123(4)(5)(6)).to.equal(21)
    })
    it('returns a function when passed only 2 arguments', () => {
      const sum12 = sum6(1)(2)
      expect(sum12(3)(4)(5)(6)).to.equal(21)
    })
    it('returns a function when passed only 1 argument', () => {
      const sum1 = sum6(1)
      expect(sum1(2)(3)(4)(5)(6)).to.equal(21)
    })
  })
})
