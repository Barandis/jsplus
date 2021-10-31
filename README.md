# JS+

JS+ is a work-in-progress library to help JavaScript do all of the things that I wish it could already do, or at least do them in the way that I wish it would do them.

This library is largely inspired by my love and admiration for functional programming languages like Haskell and Clojure and for array programming languages like APL, J, and BQN. While I do not expect JavaScript to be able to tail recurse like the former (even though it's been part of the spec for 6 years, come on guys) or to be able to handle multi-dimensional arrays as wholes like the latter, there are still a lot of good lessons that can be taken from these languages in how to make programming nicer.

In essence, this is a library of things I wish I had on Monday mornings when I go back to coding JS at work after a weekend of more "fun" languages.

Primary consideration in the beginning is for point-free styles of programming and for all manners of combinators, but other really useful functions that don't relate to either will show up here. Like the `range` function I've been unable to do without since working it out a few months ago in my quest to never have to use semi-colons in JavaScript again (even in `for` loops).

## Usage

I'm not planning on publishing this to NPM until it's closer to completion, and who even knows when that will be.

Once that happens, the intention is to make access to the functions within as painless as possible. The entire library can be can be imported/required like normal, but individual modules (`const combinators = require('jsplus/combinators')`) or even individual functions (`const flip = require('jsplus/combinators/flip')`) will also importable.

If there's something special I need to do to make sure that it can be used both as a CommonJS module and as an ES module, I'll be doing that. (It seems to just work, but it's possible I'll have to write a thin ES wrapper for that.)

## Documentation

While I don't even know what the scope of this library will be quite yet, as it gets developed, the [API documentation][1] will be kept up to date. At least for the functions themselves; overviews of the modules within the project are likely to come later, when those modules are closer to completion.

## License

MIT license, like normal. Use it for whatever you like, as long as the copyright notice is retained. See the LICENSE file for details.

[1]: https://barandis.github.io/jsplus/api
