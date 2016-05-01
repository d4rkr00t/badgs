'use strict';

exports.__esModule = true;
exports.default = badgesMiddlewareCreator;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    if (_path2.default.extname(url) === '.svg') {
      var query = url.substr(1).slice(0, -4);

      var _decode = decode(decodeURIComponent(query));

      var subject = _decode[0];
      var status = _decode[1];
      var color = _decode[2];

      var image = badgs.render(subject, status, color);

      res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
      res.end(image);
    } else {
      next();
    }
  };
}