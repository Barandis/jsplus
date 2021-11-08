// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const index = require('iterators')

const array = require('iterators/array')
const collect = require('iterators/collect')
const concat = require('iterators/concat')
const count = require('iterators/count')
const drop = require('iterators/drop')
const enumerate = require('iterators/enumerate')
const filter = require('iterators/filter')
const iterate = require('iterators/iterate')
const map = require('iterators/map')
const range = require('iterators/range')
const reduce = require('iterators/reduce')
const reverse = require('iterators/reverse')
const scan = require('iterators/scan')
const take = require('iterators/take')

describe('interators index', () => {
  it('provides all of the exported iterator functions', () => {
    expect(array).to.equal(index.array)
    expect(collect).to.equal(index.collect)
    expect(concat).to.equal(index.concat)
    expect(count).to.equal(index.count)
    expect(drop).to.equal(index.drop)
    expect(enumerate).to.equal(index.enumerate)
    expect(filter).to.equal(index.filter)
    expect(iterate).to.equal(index.iterate)
    expect(map).to.equal(index.map)
    expect(range).to.equal(index.range)
    expect(reduce).to.equal(index.reduce)
    expect(reverse).to.equal(index.reverse)
    expect(scan).to.equal(index.scan)
    expect(take).to.equal(index.take)
  })
})
