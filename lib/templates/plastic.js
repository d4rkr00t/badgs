'use strict';

exports.__esModule = true;
exports.default = pasticTemplate;
function pasticTemplate(_ref) {
  var widthA = _ref.widthA;
  var widthB = _ref.widthB;
  var color = _ref.color;
  var subject = _ref.subject;
  var status = _ref.status;

  return '\n  <svg xmlns="http://www.w3.org/2000/svg" width="' + (widthA + widthB) + '" height="18">\n    <linearGradient id="smooth" x2="0" y2="100%">\n      <stop offset="0"  stop-color="#fff" stop-opacity=".7"/>\n      <stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>\n      <stop offset=".9" stop-color="#000" stop-opacity=".3"/>\n      <stop offset="1"  stop-color="#000" stop-opacity=".5"/>\n    </linearGradient>\n\n    <mask id="round">\n      <rect width="' + (widthA + widthB) + '" height="18" rx="4" fill="#fff"/>\n    </mask>\n\n    <g mask="url(#round)">\n      <rect width="' + widthA + '" height="18" fill="#555"/>\n      <rect x="' + widthA + '" width="' + widthB + '" height="18" fill="' + (color || '#555') + '"/>\n      <rect width="' + (widthA + widthB) + '" height="18" fill="url(#smooth)"/>\n    </g>\n\n    <g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11">\n      <text x="' + widthA / 2 + '" y="14" fill="#010101" fill-opacity=".3">' + subject + '</text>\n      <text x="' + widthA / 2 + '" y="13">' + subject + '</text>\n      <text x="' + (widthA + widthB / 2) + '" y="14" fill="#010101" fill-opacity=".3">' + status + '</text>\n      <text x="' + (widthA + widthB / 2) + '" y="13">' + status + '</text>\n    </g>\n  </svg>\n  ';
}