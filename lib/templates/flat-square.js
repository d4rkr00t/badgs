'use strict';

exports.__esModule = true;
exports['default'] = flatTemplate;

function flatTemplate(_ref) {
  var widthA = _ref.widthA;
  var widthB = _ref.widthB;
  var color = _ref.color;
  var subject = _ref.subject;
  var status = _ref.status;

  return '\n  <svg xmlns="http://www.w3.org/2000/svg" width="' + (widthA + widthB) + '" height="20">\n    <g shape-rendering="crispEdges">\n      <rect width="' + widthA + '" height="20" fill="#555"/>\n      <rect x="' + widthA + '" width="' + widthB + '" height="20" fill="' + (color || '#555') + '"/>\n    </g>\n    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">\n      <text x="' + widthA / 2 + '" y="14">' + subject + '</text>\n      <text x="' + (widthA + widthB / 2 - 1) + '" y="14">' + status + '</text>\n    </g>\n  </svg>\n  ';
}

module.exports = exports['default'];