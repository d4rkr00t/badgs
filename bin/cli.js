#! /usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lib = require('./../lib/');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2);
var usage = 'Usage: subject status color [-o output.svg]';
var badgs = new _lib2.default();

var subject = args[0];
var status = args[1];
var color = args[2];
var o = args[3];
var output = args[4]; // eslint-disable-line

if (subject && status && color) {
  (function () {
    if (o && !output) {
      output = o;
      color = '';
    }

    var filename = output || subject + '-' + status + '-' + color + '.svg';

    _fs2.default.writeFile(filename, badgs.render(subject, status, color), 'utf-8', function () {
      console.log('Badge created: ' + filename); // eslint-disable-line

      process.exit(0); // eslint-disable-line
    });
  })();
} else {
    console.error(usage); // eslint-disable-line

    process.exit(1); // eslint-disable-line
  }