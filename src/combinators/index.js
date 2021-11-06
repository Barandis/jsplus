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
  compose: require('./compose'),
  composev: require('./composev'),
  constant: require('./constant'),
  identity: require('./identity'),
  pipe: require('./pipe'),
  pipev: require('./pipev'),
  rotl: require('./rotl'),
  rotr: require('./rotr'),
  substitute: require('./substitute'),
  swap: require('./swap'),
}
