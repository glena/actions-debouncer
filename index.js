function Debouncer(action, options) {
  options = options || {}
  this.action = action
  this.timeout = options.timeout || 300
  this.currentAction = null
}

Debouncer.prototype.do = function () {
  var _this = this;
  var _args = arguments;

  if (this.currentAction) {
    clearTimeout(this.currentAction)
  }

  this.currentAction = setTimeout(function() {
    _this.action.apply(_this, _args)
  }, this.timeout)
}

module.exports = Debouncer;