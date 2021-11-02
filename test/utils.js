// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function rand(min, max) {
  return Math.random() * (max - min) + min
}

function randInt(min, max) {
  const n = Math.ceil(min)
  const x = Math.floor(max)
  return Math.floor(Math.random() * (x - n) + n)
}

function randString(length) {
  let result = ''
  for (let i = 0; i < length; i += 1) {
    result += CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
  }
  return result
}

module.exports = {
  rand,
  randInt,
  randString,
}
