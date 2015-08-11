const COLOR_MAP = {
  brightgreen: '#4c1',
  green: '#97ca00',
  yellowgreen: '#a4a61d',
  yellow: '#dfb317',
  orange: '#fe7d37',
  red: '#e05d44',
  lightgrey: '#9f9f9f',
  blue: '#007ec6'
};

const BIG_CHARS = ['%', '—'];
const MEDIUM_CHARS = ['w', 'm', 'м', 'd', 'b', 'o', 'n'];
const SMALL_CHARS = ['\'', 'l', 'i', 't'];
const PUNCT_CHARS = ['.', ',', ';', ':'];
const DIGIT_REGEX = /\d/;

const UPPERCASE_CHAR_SIZE = 9.4;
const BIG_CHAR_SIZE = 9;
const MEDIUM_CHAR_SIZE = 6.9;
const CHAR_SIZE = 5.9;
const SMALL_CHAR_SIZE = 2.9;
const PUNCT_CHAR_SIZE = 3.8;
const DIGIT_SIZE = 6.5;

const PADDING_SIZE = 9;

export default class Badgs {

  /**
   * @param {String|Function} template - built-in template name [flat] or custom template function.
   */
  constructor(template) {
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
  mapColor(color) {
    if (COLOR_MAP[color]) return COLOR_MAP[color];

    if ((/^([a-f0-9]{3}){1,2}$/i).test(color)) {
      return '#' + color.toLowerCase();
    }

    return COLOR_MAP.lightgrey;
  }

  /**
   * Calculates width of block with text.
   *
   * @param {String} text
   *
   * @returns {Number}
   */
  calcWidth(text) {
    let width = 0;

    for (let i = 0; i < text.length; i++) {
      if (BIG_CHARS.indexOf(text[i]) !== -1) {
        width += BIG_CHAR_SIZE;
      } else if (MEDIUM_CHARS.indexOf(text[i]) !== -1) {
        width += MEDIUM_CHAR_SIZE;
      } else if (SMALL_CHARS.indexOf(text[i]) !== -1) {
        width += SMALL_CHAR_SIZE;
      } else if (text[i].toLowerCase() !== text[i]) {
        width += UPPERCASE_CHAR_SIZE;
      } else if (DIGIT_REGEX.test(text[i])) {
        width += DIGIT_SIZE;
      } else if (PUNCT_CHARS.indexOf(text[i]) !== -1) {
        width += PUNCT_CHAR_SIZE;
      } else {
        width += CHAR_SIZE;
      }
    }

    return Math.ceil(width + PADDING_SIZE * 2);
  }

  /**
   * Render badge with provied subject and status.
   *
   * @param {String} subject
   * @param {String} status
   * @param {String} color - color, keyword or hex (#fff)
   *
   * @returns {String}
   */
  render(subject, status, color) {
    const templateData = {
      subject,
      status,
      color: this.mapColor(color),
      widthA: this.calcWidth(subject),
      widthB: this.calcWidth(status)
    };

    return this.template(templateData);
  }
}
