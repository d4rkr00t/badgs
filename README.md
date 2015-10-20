# badgs

[![npm](https://img.shields.io/npm/v/badgs.svg)](https://www.npmjs.com/package/badgs)
[![license](https://img.shields.io/npm/l/badgs.svg)](http://opensource.org/licenses/MIT)
[![github-issues](https://img.shields.io/github/issues/d4rkr00t/badgs.svg)](https://github.com/d4rkr00t/badgs/issues)
[![travis-status](https://img.shields.io/travis/d4rkr00t/badgs.svg)](https://travis-ci.org/d4rkr00t/badgs)
[![coveralls](https://img.shields.io/coveralls/d4rkr00t/badgs.svg)](https://coveralls.io/github/d4rkr00t/badgs)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Badges generator

![nodei.co](https://nodei.co/npm/badgs.png?downloads=true&downloadRank=true&stars=true)

## Features

* Generates badges like any you can see above.
* No dependecies.
* Small and possibly work even on client.
* Easy to write own templating function.
* Well tested.
* Express/Connect middleware.

## Install

```
npm i badgs

// OR for CLI usage
npm i -g badgs
```

## Usage

### CLI
```
badgs subject status color [-o output.svg]

// Examples
badgs build success green // File will be saved inbuild-success-green.svg
badgs build success green -o custom_file_name.svg
```

### As module
```js
import Badgs from 'badgs';

const badgs = new Badgs();

console.log(badgs.render('status', 'subject', 'red'));
```

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel](https://www.npmjs.com/package/babel) | ^5.8.21 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | ^4.0.7 | ✔
[chai](https://www.npmjs.com/package/chai) | ^3.2.0 | ✔
[cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog) | ^1.1.4 | ✔
[coveralls](https://www.npmjs.com/package/coveralls) | ^2.11.4 | ✔
[eslint](https://www.npmjs.com/package/eslint) | ^1.1.0 | ✔
[isparta](https://www.npmjs.com/package/isparta) | ^3.0.3 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^2.2.5 | ✔
[mocha-lcov-reporter](https://www.npmjs.com/package/mocha-lcov-reporter) | 1.0.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.8 | ✔
[nsp](https://www.npmjs.com/package/nsp) | ^1.0.3 | ✔
[pre-commit](https://www.npmjs.com/package/pre-commit) | ^1.1.1 | ✔
[supertest](https://www.npmjs.com/package/supertest) | ^1.0.1 | ✔


## Author

Ideas/Templates — stolen from [here](https://github.com/badges/shields) and [here](https://github.com/artems/devkit).

Stanislav Sysoev <d4rkr00t@gmail.com> http://github.com/d4rkr00t

## License

 - **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributing are highly welcome!
