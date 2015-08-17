#! /usr/bin/env node
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lib = require('./../lib/');

var _lib2 = _interopRequireDefault(_lib);

var args = process.argv.slice(2);
var usage = 'Usage: subject status color [-o output.svg]';
var badgs = new _lib2['default']();

var _args = _slicedToArray(args, 5);

var subject = _args[0];
var status = _args[1];
var color = _args[2];
var o = _args[3];
var output = _args[4];
// eslint-disable-line

if (subject && status && color) {
  (function () {
    if (o && !output) {
      output = o;
      color = '';
    }

    var filename = output || subject + '-' + status + '-' + color + '.svg';

    _fs2['default'].writeFile(filename, badgs.render(subject, status, color), 'utf-8', function () {
      console.log('Badge created: ' + filename); // eslint-disable-line

      process.exit(0); // eslint-disable-line
    });
  })();
} else {
    console.error(usage); // eslint-disable-line

    process.exit(1); // eslint-disable-line
  }