// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const apply = require('combinators/apply')
const applyTo = require('combinators/applyTo')
const compose = require('combinators/compose')
const compose2 = require('combinators/compose2')
const composev = require('combinators/composev')
const constant = require('combinators/constant')
const converge = require('combinators/converge')
const dup = require('combinators/dup')
const fix = require('combinators/fix')
const identity = require('combinators/identity')
const on = require('combinators/on')
const pipe = require('combinators/pipe')
const pipev = require('combinators/pipev')
const rotl = require('combinators/rotl')
const rotr = require('combinators/rotr')
const substitute = require('combinators/substitute')
const swap = require('combinators/swap')

const B = require('combinators/pure/B')
const B1 = require('combinators/pure/B1')
const C = require('combinators/pure/C')
const Cs = require('combinators/pure/Cs')
const I = require('combinators/pure/I')
const Is = require('combinators/pure/Is')
const K = require('combinators/pure/K')
const P = require('combinators/pure/P')
const Q = require('combinators/pure/Q')
const R = require('combinators/pure/R')
const Rs = require('combinators/pure/Rs')
const S = require('combinators/pure/S')
const Sp = require('combinators/pure/Sp')
const T = require('combinators/pure/T')
const W = require('combinators/pure/W')
const Z = require('combinators/pure/Z')

const curry = require('functions/curry')
const curry2 = require('functions/curry2')
const curry3 = require('functions/curry3')
const curry4 = require('functions/curry4')
const curry5 = require('functions/curry5')
const curryv = require('functions/curryv')
const partial = require('functions/partial')
const uncurry = require('functions/uncurry')

const array = require('iterators/array')
const collect = require('iterators/collect')
const concat = require('iterators/concat')
const count = require('iterators/count')
const cycle = require('iterators/cycle')
const drop = require('iterators/drop')
const dropWhile = require('iterators/dropWhile')
const enumerate = require('iterators/enumerate')
const filter = require('iterators/filter')
const iterate = require('iterators/iterate')
const map = require('iterators/map')
const range = require('iterators/range')
const reduce = require('iterators/reduce')
const reverse = require('iterators/reverse')
const scan = require('iterators/scan')
const take = require('iterators/take')
const takeWhile = require('iterators/takeWhile')

const add = require('operators/add')
const band = require('operators/band')
const bls = require('operators/bls')
const bnot = require('operators/bnot')
const bor = require('operators/bor')
const brs = require('operators/brs')
const burs = require('operators/burs')
const bxor = require('operators/bxor')
const coal = require('operators/coal')
const ceq = require('operators/ceq')
const cne = require('operators/cne')
const cond = require('operators/cond')
const div = require('operators/div')
const eq = require('operators/eq')
const ge = require('operators/ge')
const gt = require('operators/gt')
const land = require('operators/land')
const le = require('operators/le')
const lnot = require('operators/lnot')
const lor = require('operators/lor')
const lt = require('operators/lt')
const mul = require('operators/mul')
const ne = require('operators/ne')
const neg = require('operators/neg')
const opt = require('operators/opt')
const plus = require('operators/plus')
const pow = require('operators/pow')
const prop = require('operators/prop')
const propOf = require('operators/propOf')
const rem = require('operators/rem')
const sub = require('operators/sub')

const bigint = require('primitives/bigint')
const boolean = require('primitives/boolean')
const number = require('primitives/number')
const string = require('primitives/string')
const symbol = require('primitives/symbol')

const isArray = require('utilities/isArray')
const isFunction = require('utilities/isFunction')
const isGeneratorFunction = require('utilities/isGeneratorFunction')
const isNumber = require('utilities/isNumber')
const isObject = require('utilities/isObject')
const isString = require('utilities/isString')

const index = require('.')

describe('src index', () => {
  it('provides all of the exported functions', () => {
    // combinators
    expect(apply).to.equal(index.apply)
    expect(applyTo).to.equal(index.applyTo)
    expect(compose).to.equal(index.compose)
    expect(compose2).to.equal(index.compose2)
    expect(composev).to.equal(index.composev)
    expect(constant).to.equal(index.constant)
    expect(converge).to.equal(index.converge)
    expect(dup).to.equal(index.dup)
    expect(fix).to.equal(index.fix)
    expect(identity).to.equal(index.identity)
    expect(on).to.equal(index.on)
    expect(pipe).to.equal(index.pipe)
    expect(pipev).to.equal(index.pipev)
    expect(rotl).to.equal(index.rotl)
    expect(rotr).to.equal(index.rotr)
    expect(substitute).to.equal(index.substitute)
    expect(swap).to.equal(index.swap)

    // pure combinators
    expect(B).to.equal(index.B)
    expect(B1).to.equal(index.B1)
    expect(C).to.equal(index.C)
    expect(Cs).to.equal(index.Cs)
    expect(I).to.equal(index.I)
    expect(Is).to.equal(index.Is)
    expect(K).to.equal(index.K)
    expect(P).to.equal(index.P)
    expect(Q).to.equal(index.Q)
    expect(R).to.equal(index.R)
    expect(Rs).to.equal(index.Rs)
    expect(S).to.equal(index.S)
    expect(Sp).to.equal(index.Sp)
    expect(T).to.equal(index.T)
    expect(W).to.equal(index.W)
    expect(Z).to.equal(index.Z)

    // functions
    expect(curry).to.equal(index.curry)
    expect(curry2).to.equal(index.curry2)
    expect(curry3).to.equal(index.curry3)
    expect(curry4).to.equal(index.curry4)
    expect(curry5).to.equal(index.curry5)
    expect(curryv).to.equal(index.curryv)
    expect(partial).to.equal(index.partial)
    expect(uncurry).to.equal(index.uncurry)

    // iterators
    expect(array).to.equal(index.array)
    expect(collect).to.equal(index.collect)
    expect(concat).to.equal(index.concat)
    expect(count).to.equal(index.count)
    expect(cycle).to.equal(index.cycle)
    expect(drop).to.equal(index.drop)
    expect(dropWhile).to.equal(index.dropWhile)
    expect(enumerate).to.equal(index.enumerate)
    expect(filter).to.equal(index.filter)
    expect(iterate).to.equal(index.iterate)
    expect(map).to.equal(index.map)
    expect(range).to.equal(index.range)
    expect(reduce).to.equal(index.reduce)
    expect(reverse).to.equal(index.reverse)
    expect(scan).to.equal(index.scan)
    expect(take).to.equal(index.take)
    expect(takeWhile).to.equal(index.takeWhile)

    // operators
    expect(add).to.equal(index.add)
    expect(band).to.equal(index.band)
    expect(bls).to.equal(index.bls)
    expect(bnot).to.equal(index.bnot)
    expect(bor).to.equal(index.bor)
    expect(brs).to.equal(index.brs)
    expect(burs).to.equal(index.burs)
    expect(bxor).to.equal(index.bxor)
    expect(coal).to.equal(index.coal)
    expect(ceq).to.equal(index.ceq)
    expect(cne).to.equal(index.cne)
    expect(cond).to.equal(index.cond)
    expect(div).to.equal(index.div)
    expect(eq).to.equal(index.eq)
    expect(ge).to.equal(index.ge)
    expect(gt).to.equal(index.gt)
    expect(land).to.equal(index.land)
    expect(le).to.equal(index.le)
    expect(lnot).to.equal(index.lnot)
    expect(lor).to.equal(index.lor)
    expect(lt).to.equal(index.lt)
    expect(mul).to.equal(index.mul)
    expect(ne).to.equal(index.ne)
    expect(neg).to.equal(index.neg)
    expect(opt).to.equal(index.opt)
    expect(plus).to.equal(index.plus)
    expect(pow).to.equal(index.pow)
    expect(prop).to.equal(index.prop)
    expect(propOf).to.equal(index.propOf)
    expect(rem).to.equal(index.rem)
    expect(sub).to.equal(index.sub)

    // primitives
    expect(bigint).to.equal(index.bigint)
    expect(boolean).to.equal(index.boolean)
    expect(number).to.equal(index.number)
    expect(string).to.equal(index.string)
    expect(symbol).to.equal(index.symbol)

    // utilities
    expect(isArray).to.equal(index.isArray)
    expect(isFunction).to.equal(index.isFunction)
    expect(isGeneratorFunction).to.equal(index.isGeneratorFunction)
    expect(isNumber).to.equal(index.isNumber)
    expect(isObject).to.equal(index.isObject)
    expect(isString).to.equal(index.isString)
  })
})
