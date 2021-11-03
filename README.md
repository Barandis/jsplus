# JS+

JS+ is a library (and a work in progress) to help make JavaScript what it should be*. It was largely inspried by my love and admiration for functional programming languages like Haskell and Clojure; array programming langauges like APL, J, and BQN; and concatenative programming languages like Forth and Factor. All of these have ideas that can be used to make JS programming just...*nicer*.

In essence, this is a library of things that I wish I had on Monday mornings when I go back to JS coding after a weekend of coding in "fun" languages.

To make this happen, the focus is cast to a few particular things.

- Iterators. JavaScript designers gave their love only to arrays even as they were adding first-class support for iterators. You'll find that you can reduce, map, and filter an array, but oddly no such methods exist for any other kind of iterable values. This library corrects this with a full implementation of functions that work with iterators.
- Point-free programming. In particular, combinator use and currying are given a fair bit of attention here, including providing curried functional versions of almost all of JavaScript's operators. This doesn't let you do anything you couldn't already do. It just makes doing it *nicer*, even if you choose not to program in a point-free style.

There will be more added to this list in the near future. For example, I'm exploring the idea of new types like `Option` and `Result` from Rust (or the equivalent `Maybe` and `Either` from Haskell) to see how much they can add.
-
## Usage

I'm not planning on publishing this to NPM until it's closer to completion, and who even knows when that will be.

Once that happens, the intention is to make access to the functions within as painless as possible. The entire library can be can be imported/required like normal, but individual modules (`const combinators = require('jsplus/combinators')`) or even individual functions (`const flip = require('jsplus/combinators/flip')`) will also importable.

If there's something special I need to do to make sure that it can be used both as a CommonJS module and as an ES module, I'll be doing that. (It seems to just work, but it's possible I'll have to write a thin ES wrapper for that.)

## Documentation

While I don't even know what the scope of this library will be quite yet, as it gets developed, the [API documentation][1] will be kept up to date. At least for the functions themselves; overviews of the modules within the project are likely to come later, when those modules are closer to completion.

## License

MIT license, like normal. Use it for whatever you like, as long as the copyright notice is retained. See the LICENSE file for details.

[1]: https://barandis.github.io/jsplus/api
