# badgs

[![npm](https://img.shields.io/npm/v/badgs.svg)](https://www.npmjs.com/package/badgs)
[![license](https://img.shields.io/npm/l/badgs.svg)](http://opensource.org/licenses/MIT)
[![github-issues](https://img.shields.io/github/issues/d4rkr00t/badgs.svg)](https://github.com/d4rkr00t/badgs/issues)
[![travis-status](https://img.shields.io/travis/d4rkr00t/badgs.svg)](https://travis-ci.org/d4rkr00t/badgs)
[![coveralls](https://img.shields.io/coveralls/d4rkr00t/badgs.svg)](https://coveralls.io/github/d4rkr00t/badgs)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Badges generator

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

## Author

Ideas/Templates — stolen from [here](https://github.com/badges/shields) and [here](https://github.com/artems/devkit).

Stanislav Sysoev <d4rkr00t@gmail.com> http://github.com/d4rkr00t

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributing are highly welcome! This repos is commitizen friendly — please read about it [here](http://commitizen.github.io/cz-cli/).
