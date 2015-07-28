import path from 'path';

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
   * @return {String}
   */
  mapColor(color) {
    switch (color) {
      case 'brightgreen':
        return '#4c1';
      case 'green':
        return '#97ca00';
      case 'yellowgreen':
        return '#a4a61d';
      case 'yellow':
        return '#dfb317';
      case 'orange':
        return '#fe7d37';
      case 'red':
        return '#e05d44';
      case 'lightgrey':
        return '#9f9f9f';
      case 'blue':
        return '#007ec6';
      default:
        if ((/^([a-f0-9]{3}){1,2}$/i).test(color)) {
          return '#' + color.toLowerCase();
        }

        return '#9f9f9f';
    }
  }

  /**
   * Render badge with provied subject and status.
   *
   * @param {String} subject
   * @param {String} status
   * @param {String} color - color, keyword or hex (#fff)
   *
   * @return {String}
   */
  render(subject, status, color) {
    const templateData = {
      textA: subject,
      textB: status,
      color: this.mapColor(color),
      widthA: subject.length * 5 + 15,
      widthB: status.length * 5 + 15
    };

    return this.template(templateData);
  }
}
