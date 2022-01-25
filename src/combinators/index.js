// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const pure = require('./pure')

/**
 * @module combinators
 */
module.exports = {
  ...pure,
  apply: require('./apply'),
  applyTo: require('./applyTo'),
  compose: require('./compose'),
  composev: require('./composev'),
  constant: require('./constant'),
  converge: require('./converge'),
  dup: require('./dup'),
  fix: require('./fix'),
  identity: require('./identity'),
  on: require('./on'),
  pipe: require('./pipe'),
  pipev: require('./pipev'),
  rotl: require('./rotl'),
  rotr: require('./rotr'),
  substitute: require('./substitute'),
  swap: require('./swap'),
}
