'use strict';

exports.__esModule = true;
exports['default'] = flatTemplate;

function flatTemplate(_ref) {
  var widthA = _ref.widthA;
  var widthB = _ref.widthB;
  var color = _ref.color;
  var subject = _ref.subject;
  var status = _ref.status;

  return '\n  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + (widthA + widthB) + '" height="20">\n    <linearGradient id="smooth" x2="0" y2="100%">\n      <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>\n      <stop offset="1" stop-opacity=".1"/>\n    </linearGradient>\n\n    <mask id="round">\n      <rect width="' + (widthA + widthB) + '" height="20" rx="3" fill="#fff"/>\n    </mask>\n\n    <g mask="url(#round)">\n      <rect width="' + widthA + '" height="20" fill="#555"/>\n      <rect x="' + widthA + '" width="' + widthB + '" height="20" fill="' + (color || '#555') + '"/>\n      <rect width="' + (widthA + widthB) + '" height="20" fill="url(#smooth)"/>\n    </g>\n\n    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">\n      <text x="' + widthA / 2 + '" y="15" fill="#010101" fill-opacity=".3">' + subject + '</text>\n      <text x="' + widthA / 2 + '" y="14">' + subject + '</text>\n      <text x="' + (widthA + widthB / 2) + '" y="15" fill="#010101" fill-opacity=".3">' + status + '</text>\n      <text x="' + (widthA + widthB / 2) + '" y="14">' + status + '</text>\n    </g>\n  </svg>';
}

module.exports = exports['default'];