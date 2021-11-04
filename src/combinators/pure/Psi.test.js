// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const B = require('combinators/pure/B')
const C = require('combinators/pure/C')
const I = require('combinators/pure/I')
const Psi = require('combinators/pure/Psi')
const add = require('operators/add')
const mul = require('operators/mul')
const neg = require('operators/neg')
const sub = require('operators/sub')

describe('Ψ combinator', () => {
  const f = mul(2)
  const g = C(sub)(1)
  const h = mul
  const a = 3
  const b = 4

  it('applies a unary function to two args and combines them with a binary function', () => {
    expect(Psi(add)(neg)(4)(5))
      .to.equal(add(neg(4))(neg(5)))
      .and.to.equal(-4 + -5)
  })
  it('applies its first argument if its second argument is I', () => {
    expect(Psi(mul)(I)(6)(8))
      .to.equal(mul(6)(8))
      .and.to.equal(6 * 8)
    expect(Psi(sub)(I)(14)(5))
      .to.equal(sub(14)(5))
      .and.to.equal(14 - 5)
  })
  it('should show Ψ(Ψhf)fg is equivalent to Ψh(Bfg)', () => {
    const p1 = Psi(Psi(h)(f))(g)(a)(b)
    const p2 = Psi(h)(B(f)(g))(a)(b)
    expect(p1).to.equal(p2)
  })
  it('should show B(CΨf)(CΨg) is equivalent to CΨ(Bgf)', () => {
    const p1 = B(C(Psi)(f))(C(Psi)(g))(h)(a)(b)
    const p2 = C(Psi)(B(g)(f))(h)(a)(b)
    expect(p1).to.equal(p2)
  })
})
