// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const isFunction = require('utilities/isFunction')
const isGeneratorFunction = require('utilities/isGeneratorFunction')
const isObject = require('utilities/isObject')

/**
 * Creates an iterator over an object.
 *
 * The iterator operates in the same order as the keys in `Object.keys(obj)` for the object.
 * This means that integer indices in numerical come first, non-integer strings in insertion
 * order come second, and symbols in insertion order come third.
 *
 * The values that the iterator yields are two-element arrays, with the key being the first
 * element and the value being the second.
 *
 * @param {object} obj The object over which an iterator is to be created.
 * @returns {iterator} An iterator which provides the objects properties in `[key, value]`
 *      form.
 * @alias module:iterators.objectIterator
 * @private
 */
function* iterateObj(obj) {
  for (const entry of Object.entries(obj)) {
    yield entry
  }
}

/**
 * Creates an iterator over a function.
 *
 * This function expects `fn` to be a function of two parameters. The first should be a
 * number, which starts at 0 on the first iterator `next` request and increases by one for
 * each subsequent request. The second argument will be the value yielded on the prior
 * `next` request (on the first request, this will be `undefined`). This function will be
 * called on each `next` request and the return value will become the iterator's yielded
 * value.
 *
 * At any point when `fn` returns `undefined`, iteration will stop (the `done` property of
 * the object yielded by the iterator will be set to `true` for it and any subsequent
 * request).
 *
 * @param {function} fn The function over which an iterator is to be created.
 * @returns {iterator} An iterator that uses `fn`'s return values as its yielded values.
 * @alias module:iterators.functionIterator
 * @private
 */
function* iterateFn(fn) {
  let current
  let index = 0

  for (;;) {
    current = fn(index, current)
    index += 1
    if (current === undefined) {
      break
    }
    yield current
  }
}

/**
 * Creates an iterator that yields one instance of the provided argument and then completes.
 *
 * @param {*} x The value to be contained in the iterator.
 * @returns {iterator} An iterator of one value, which is `x`.
 * @alias module:iterators.itemIterator
 * @private
 */
function* iterateItem(x) {
  yield x
}

/**
 * Creates an iterator over the provided value.
 *
 * For values that implement the iterable protocol (i.e., that have properties named
 * `Symbol.iterator` that evaluate to functions), It's as simple as that. Therefore, arrays,
 * strings, and any custom objects that implement the iterable protocol work right out of
 * the box.
 *
 * ```
 * const iter = iterate([1, 2, 3]);
 *
 * console.log(iter.next().value) // 1
 * console.log(iter.next().value) // 2
 * console.log(iter.next().value) // 3
 * console.log(iter.next().done)  // true
 * ```
 *
 * Generic objects get special support. If an object (meaning an object literal or something
 * created with `Object.create()`, but not custom classes, which have to implement the
 * iterable protocol explicitly) is passed to `iterate`, a new iterator will be returned
 * that iterates over everything that `Object.keys` returns for that object This will come
 * out in the "natural" property order, as follows:
 *
 * 1. Integer indices, in numerical order. (This does include strings that convert to
 *    integers, such as `'2'`, but not strings that do not directly correspond to an integer
 *    even if they are convertible to integers, such as `'02'`.)
 * 2. String property names, in the order in which they were added to the object.
 *
 * Symbol-keyed properties are not included by this iterator as symbols are intended to be
 * used for non-enumerable information (neither `Object.keys`, `Object.entries`, or
 * `for...in` loops include them either, even if they're made enumerable).
 *
 * The values that this iterator provides are two-element arrays, in which the first element
 * is the key and the second is the value.
 *
 * ```
 * const iter = iterate({ b: 2, a: 4 });
 *
 * console.log(iter.next().value) // ['b',2]
 * console.log(iter.next().value) // ['a',4]
 * console.log(iter.next().done)  // true
 * ```
 *
 * This does not modify the object itself, so it's not actually made "iterable" in any other
 * sense. It's explicit support for objects in this context and nothing more.
 *
 * If this function is provided a *function* as its first argument, an iterator is returned
 * which runs that function one time for each call to `next`. That function is provided two
 * arguments: the index of the call (starting at `0` for the first time it's called and
 * increasing by 1 per invocation after that) and the return value of the previous call to
 * the function (starting at `undefined` for the first run before the function is ever
 * called). If the function ever returns `undefined`, the iterator will terminate and set
 * the `done` property of its return value to `true` at that point.
 *
 * Note that since the initial value of the second argument is `undefined`, using default
 * arguments is an excellent way of providing the function an initial value.
 *
 * ```
 * const constIter = iterate(() => 6)   // Bert's favorite number
 * console.log(constIter.next().value)   // 6
 * console.log(constIter.next().value)   // 6
 * // This will go on forever, as long as `next` keeps getting called
 *
 * const indexIter = iterate(x => x * x)
 * console.log(indexIter.next().value)   // 0
 * console.log(indexIter.next().value)   // 1
 * console.log(indexIter.next().value)   // 4
 * console.log(indexIter.next().value)   // 9
 * // Again, this will go on forever, or until the numbers get to big JS to handle
 *
 * // Using default value on `last` parameter for initial value
 * const lastIter = iterate((index, last = 1) => last * (index + 1))  // Factorial
 * console.log(lastIter.next().value)    // 1
 * console.log(lastIter.next().value)    // 2
 * console.log(lastIter.next().value)    // 6
 * console.log(lastIter.next().value)    // 24
 * // Again, forever, though factorials get big quickly
 *
 * // This iterator will terminate when the function returns `undefined`
 * const stopIter = iterate(x => x < 2 ? x : undefined)
 * console.log(stopIter.next().value)    // 0
 * console.log(stopIter.next().value)    // 1
 * console.log(stopIter.next().done)     // true
 * ```
 *
 * Finally, `iterate` behaves nicely with generator functions (and with generators
 * themselves) but there are some things to be aware of.
 *
 * Passing in a generator function (anything actually defined with `function*`) will return
 * a generator, meaning that `iterate` will invoke the generator function each time it's
 * called. However, passing in a *generator* will result in the generator itself (because
 * generators implement the iterable protocol but simply use it to return themselves).
 *
 * While both will work, this does mean that passing in the same *generator function*
 * multiple times is fine, but passing in the same *generator* multiple times is probably
 * not. This is because a generator is an iterator, especially in the sense that after its
 * traversed, it's useless. Using a generator and then calling `iterate` with it again will
 * just return the same spent generator. Calling `iterate` with a generator *function* will
 * return a *new* generator, ready to be traversed from the beginning. The difference can be
 * tricky to grasp, but it's important.
 *
 * Passing in either a generator is fine if it's only being used once.
 *
 * If the argument is none of these things, then an iterator is returned that yields that
 * argument one time before completing.
 *
 * @param {*} x The value to be iterated over.
 * @return {iterator} An iterator over the provided value. If the value is not iterable
 *     (it's not an object or a function, and it doesn't have a protocol-defined iterator),
 *     an iterator that returns only that value once is returned.
 * @alias module:iterators.iterate
 */
function iterate(x) {
  switch (true) {
    case isGeneratorFunction(x):
      return x()
    case isFunction(x[Symbol.iterator]):
      return x[Symbol.iterator]()
    case isFunction(x):
      return iterateFn(x)
    case isObject(x):
      return iterateObj(x)
    default:
      return iterateItem(x)
  }
}

module.exports = iterate
