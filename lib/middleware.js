'use strict';

exports.__esModule = true;
exports['default'] = badgesMiddlewareCreator;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var specialChar7 = String.fromCharCode(7);
var specialChar8 = String.fromCharCode(8);
var specialChar7RE = new RegExp(specialChar7, 'g');
var specialChar8RE = new RegExp(specialChar8, 'g');

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
      var parts = decode(decodeURIComponent(query));
      var image = badgs.render(parts[0], parts[1], parts[2]);

      res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
      res.end(image);
    } else {
      next();
    }
  };
}

module.exports = exports['default'];