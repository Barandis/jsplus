// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { expect } = require('test/utils')

const index = require('utilities')

const isArray = require('utilities/isArray')
const isFunction = require('utilities/isFunction')
const isGeneratorFunction = require('utilities/isGeneratorFunction')
const isNumber = require('utilities/isNumber')
const isObject = require('utilities/isObject')
const isString = require('utilities/isString')

describe('utilities index', () => {
  it('provides all of the exported utilities', () => {
    expect(isArray).to.equal(index.isArray)
    expect(isFunction).to.equal(index.isFunction)
    expect(isGeneratorFunction).to.equal(index.isGeneratorFunction)
    expect(isNumber).to.equal(index.isNumber)
    expect(isObject).to.equal(index.isObject)
    expect(isString).to.equal(index.isString)
  })
})
