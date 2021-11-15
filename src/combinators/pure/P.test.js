// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const { B, C, I, K, P, W } = require('combinators/pure')
const { add, mul, neg, sub } = require('operators')

describe('P combinator', () => {
  const f = mul(2)
  const g = C(sub)(1)
  const h = mul
  const a = 3
  const b = 4

  it('applies a unary function to two args and combines them with a binary function', () => {
    expect(P(add)(neg)(4)(5))
      .to.equal(add(neg(4))(neg(5)))
      .and.to.equal(-4 + -5)
  })
  it('applies its first argument if its second argument is I', () => {
    expect(P(mul)(I)(6)(8))
      .to.equal(mul(6)(8))
      .and.to.equal(6 * 8)
    expect(P(sub)(I)(14)(5))
      .to.equal(sub(14)(5))
      .and.to.equal(14 - 5)
  })
  it('should show Ψ(Ψhf)fg is equivalent to Ψh(Bfg)', () => {
    const p1 = P(P(h)(f))(g)(a)(b)
    const p2 = P(h)(B(f)(g))(a)(b)
    expect(p1).to.equal(p2)
  })
  it('should show B(CΨf)(CΨg) is equivalent to CΨ(Bgf)', () => {
    const p1 = B(C(P)(f))(C(P)(g))(h)(a)(b)
    const p2 = C(P)(B(g)(f))(h)(a)(b)
    expect(p1).to.equal(p2)
  })
  it('can be constructed from C(B(B(BW)(BBC))(B(BC)(BB(BB))))(BWK)', () => {
    const p = C(B(B(B(W))(B(B)(C)))(B(B(C))(B(B)(B(B)))))(B(W)(K))
    expect(p(add)(neg)(4)(5)).to.equal(-9)
  })
})
