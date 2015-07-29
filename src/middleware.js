'use strict';

import path from 'path';

const specialChar7 = String.fromCharCode(7);
const specialChar8 = String.fromCharCode(8);
const specialChar7RE = new RegExp(specialChar7, 'g');
const specialChar8RE = new RegExp(specialChar8, 'g');

function decode(str) {
  return str
    .replace(/--/g, specialChar7)
    .replace(/__/g, specialChar8)
    .split('-')
    .map(x => x.replace(/_/g, ' '))            // replace _  to space
    .map(x => x.replace(specialChar7RE, '-'))  // replace -- to -
    .map(x => x.replace(specialChar8RE, '_')); // replace __ to _
}

/**
 * Creates middleware for handling badges requests.
 *
 * @param {Object} badgs - instance of Badgs class.
 *
 * @returns {Function}
 */
export default function badgesMiddlewareCreator(badgs) {
  return function badgesMiddleware(req, res, next) {
    const url = req.url;

    if (path.extname(url) === '.svg') {
      const query = url.substr(1).slice(0, -4);
      const parts = decode(decodeURIComponent(query));
      const image = badgs.render(parts[0], parts[1], parts[2]);

      res.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
      res.end(image);
    } else {
      next();
    }
  };
}
