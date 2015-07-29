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

const LETTER_SIZE = 5;
const CAP_CORRECTION = 0.4;
const PADDING_SIZE = 4;

export default class Badgs {

  /**
   * @param {Object} options
   * @param {String} options.template - built-in template name [flat]
   * @param {Function} options.customTemplate
   */
  constructor({ template, customTemplate }) {

    if (customTemplate) {
      this.template = customTemplate;
      return;
    }

    this.template = require('./templates/' + (template || 'flat'));
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

    return '#9f9f9f';
  }

  /**
   * Add correction if there are any capitalize letters.
   *
   * @param {String} text
   *
   * @returns {Number}
   */
  capCorrection(text) {
    let correction = 0;

    for (let i = 0; i < text.length; i++) {
      if (text[i].toUpperCase() === text[i]) {
        correction += CAP_CORRECTION;
      }
    }

    return correction;
  }

  /**
   * Calculates width of block with text.
   *
   * @param {String} text
   *
   * @returns {Number}
   */
  calcWidth(text) {
    return Math.ceil(text.length * (LETTER_SIZE + PADDING_SIZE) + this.capCorrection(text));
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
