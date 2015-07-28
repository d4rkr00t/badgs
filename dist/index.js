'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var Badgs = (function () {
  /**
   * @param {Object} options
   * @param {String} options.template - built-in template name [flat]
   * @param {Function} options.customTemplate
   */

  function Badgs(_ref) {
    var template = _ref.template;
    var customTemplate = _ref.customTemplate;

    _classCallCheck(this, Badgs);

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

  Badgs.prototype.mapColor = function mapColor(color) {
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
        if (/^([a-f0-9]{3}){1,2}$/i.test(color)) {
          return '#' + color.toLowerCase();
        }

        return '#9f9f9f';
    }
  };

  /**
   * Render badge with provied subject and status.
   *
   * @param {String} subject
   * @param {String} status
   * @param {String} color - color, keyword or hex (#fff)
   *
   * @return {String}
   */

  Badgs.prototype.render = function render(subject, status, color) {
    var templateData = {
      textA: subject,
      textB: status,
      color: this.mapColor(color),
      widthA: subject.length * 5 + 15,
      widthB: status.length * 5 + 15
    };

    return this.template(templateData);
  };

  return Badgs;
})();

exports['default'] = Badgs;
module.exports = exports['default'];