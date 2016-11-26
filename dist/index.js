"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Debouncer = function () {
  function Debouncer(action, options) {
    _classCallCheck(this, Debouncer);

    options = options || {};
    this.action = action;
    this.timeout = options.timeout || 300;
    this.currentAction = null;
  }

  _createClass(Debouncer, [{
    key: "do",
    value: function _do() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this.currentAction) {
        clearTimeout(this.currentAction);
      }
      this.currentAction = setTimeout(function () {
        return _this.action.apply(_this, args);
      }, this.timeout);
    }
  }]);

  return Debouncer;
}();

exports.default = Debouncer;