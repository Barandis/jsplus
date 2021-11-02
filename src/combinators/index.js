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
  pipe: require('./pipe'),
  rotl: require('./rotl'),
  rotr: require('./rotr'),
  swap: require('./swap'),
}
