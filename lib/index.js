'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var COLOR_MAP = {
  brightgreen: '#4c1',
  green: '#97ca00',
  yellowgreen: '#a4a61d',
  yellow: '#dfb317',
  orange: '#fe7d37',
  red: '#e05d44',
  lightgrey: '#9f9f9f',
  blue: '#007ec6'
};

var LETTER_SIZE = 5;
var CORRECTION = 0.4;
var PADDING_SIZE = 4;

var Badgs = (function () {

  /**
   * @param {String|Function} template - built-in template name [flat] or custom template function.
   */

  function Badgs(template) {
    _classCallCheck(this, Badgs);

    if (!template || typeof template === 'string') {
      this.template = require('./templates/' + (template || 'flat'));
    } else {
      this.template = template;
    }
  }

  /**
   * Map color keyword to hex value.
   * @private
   *
   * @param {String} color - keyword or hex value.
   *
   * @returns {String}
   */

  Badgs.prototype.mapColor = function mapColor(color) {
    if (COLOR_MAP[color]) return COLOR_MAP[color];

    if (/^([a-f0-9]{3}){1,2}$/i.test(color)) {
      return '#' + color.toLowerCase();
    }

    return COLOR_MAP.lightgrey;
  };

  /**
   * Add correction if there are any capitalize letters.
   *
   * @param {String} text
   *
   * @returns {Number}
   */

  Badgs.prototype.capCorrection = function capCorrection(text) {
    var correction = 0;

    for (var i = 0; i < text.length; i++) {
      if (text[i].toUpperCase() === text[i]) {
        correction += CORRECTION;
      }
    }

    return correction;
  };

  /**
   * Calculates width of block with text.
   *
   * @param {String} text
   *
   * @returns {Number}
   */

  Badgs.prototype.calcWidth = function calcWidth(text) {
    return Math.ceil(text.length * (LETTER_SIZE + PADDING_SIZE) + this.capCorrection(text));
  };

  /**
   * Render badge with provied subject and status.
   *
   * @param {String} subject
   * @param {String} status
   * @param {String} color - color, keyword or hex (#fff)
   *
   * @returns {String}
   */

  Badgs.prototype.render = function render(subject, status, color) {
    var templateData = {
      subject: subject,
      status: status,
      color: this.mapColor(color),
      widthA: this.calcWidth(subject),
      widthB: this.calcWidth(status)
    };

    return this.template(templateData);
  };

  return Badgs;
})();

exports['default'] = Badgs;
module.exports = exports['default'];