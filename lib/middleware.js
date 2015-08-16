'use strict';

exports.__esModule = true;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = badgesMiddlewareCreator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var specialChar7 = String.fromCharCode(7);
var specialChar8 = String.fromCharCode(8);
var specialChar7RE = new RegExp(specialChar7, 'g');
var specialChar8RE = new RegExp(specialChar8, 'g');

/**
 * Decodes URL and returns [subject, status, color]
 *
 * @param {String} str
 *
 * @returns {Array}
 */
function decode(str) {
  return str.replace(/--/g, specialChar7).replace(/__/g, specialChar8).split('-').map(function (x) {
    return x.replace(/_/g, ' ');
  }) // replace _  to space
  .map(function (x) {
    return x.replace(specialChar7RE, '-');
  }) // replace -- to -
  .map(function (x) {
    return x.replace(specialChar8RE, '_');
  }); // replace __ to _
}

/**
 * Creates middleware for handling badges requests.
 *
 * @param {Object} badgs - instance of Badgs class.
 *
 * @returns {Function}
 */

function badgesMiddlewareCreator(badgs) {
  return function badgesMiddleware(req, res, next) {
    var url = req.url;

    if (_path2['default'].extname(url) === '.svg') {
      var query = url.substr(1).slice(0, -4);

      var _decode = decode(decodeURIComponent(query));

      var _decode2 = _slicedToArray(_decode, 3);

      var subject = _decode2[0];
      var _status = _decode2[1];
      var color = _decode2[2];

      var image = badgs.render(subject, _status, color);

      res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
      res.end(image);
    } else {
      next();
    }
  };
}

module.exports = exports['default'];