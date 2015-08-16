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

var LOWERCASE_SIZE = 7;
var UPPERCASE_SIZE = 8.7;
var LETTERS_REGEX = /\w/;
var LETTERS_MAP = {
  // EN
  a: [6.6, 7.5], b: [6.8, 7.5], c: [5.7, 7.7], d: [6.8, 8.5],
  e: [6.5, 7], f: [3.9, 6.3], g: [6.8, 8.5], h: [7, 8.3],
  i: [3, 4.6], j: [3.8, 5], k: [6.5, 7.6], l: [3, 6.1],
  m: [10.7, 9.3], n: [7, 8.2], o: [6.7, 8.7], p: [6.8, 6.6],
  q: [6.8, 8.7], r: [4.7, 7.6], s: [5.7, 7.5], t: [4.3, 6.8],
  u: [7, 8], v: [6.5, 7.5], w: [9, 10.9], x: [6.5, 7.5],
  y: [6.5, 6.8], z: [5.8, 7.5],

  // RU
  а: [6.6, 7.5], б: [6.8, 7.5], в: [6.5, 7.5], г: [5.2, 6.2],
  д: [6.8, 8.2], е: [6.5, 7], ё: [6.5, 7], ж: [8.8, 10.7],
  з: [5.8, 6.8], и: [7, 8.3], й: [7, 8.3], к: [6.5, 7.6],
  л: [6.8, 8.1], м: [7.7, 9.3], н: [7, 8.3], о: [6.7, 8.7],
  п: [7, 8.3], р: [6.8, 6.6], с: [5.7, 7.7], т: [5.4, 6.8],
  у: [6.5, 6.8], ф: [9.2, 9], х: [6.5, 7.5], ц: [7.1, 8.4],
  ч: [6.7, 7.8], ш: [9.6, 11.3], щ: [9.8, 11.5], ъ: [7, 8.6],
  ы: [8.7, 10.1], ь: [6.3, 7.5], э: [6, 7.7], ю: [9.2, 11.4],
  я: [6.6, 7.8]
};

var CHARS_MAP = {
  '!': 4.3, '@': 11, $: 7, '%': 12,
  '^': 9, '&': 8, '*': 7, '(': 5,
  ')': 5, '-': 5, '—': 11, _: 7,
  '=': 9, '+': 9, '{': 7, '}': 7,
  '"': 5, '\'': 3, '.': 4, ',': 4,
  ':': 5, ';': 5, '|': 5, ' ': 3.8,
  '~': 9, '/': 5, '\\': 5, '[': 5,
  ']': 5, '`': 7
};

var DIGIT_SIZE = 7;
var DIGIT_REGEX = /\d/;

var PADDING_SIZE = 9;

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

  Badgs.prototype.processLetter = function processLetter(char) {
    var letter = char.toLowerCase();

    if (LETTERS_MAP[letter]) {
      if (letter === char) {
        return LETTERS_MAP[letter][0];
      }

      return LETTERS_MAP[letter][1];
    }

    if (letter === char) {
      return LOWERCASE_SIZE;
    }

    return UPPERCASE_SIZE;
  };

  /**
   * Calculates width of block with text.
   *
   * @param {String} text
   *
   * @returns {Number}
   */

  Badgs.prototype.calcWidth = function calcWidth(text) {
    var width = 0;

    for (var i = 0; i < text.length; i++) {
      if (DIGIT_REGEX.test(text[i])) {
        // DIGIT
        width += DIGIT_SIZE;
      } else if (LETTERS_REGEX.test(text[i])) {
        // UPPERCASE group
        width += this.processLetter(text[i]);
      } else if (CHARS_MAP[text[i]]) {
        width += CHARS_MAP[text[i]];
      } else {
        width += LOWERCASE_SIZE;
      }
    }

    return Math.ceil(width + PADDING_SIZE * 2);
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