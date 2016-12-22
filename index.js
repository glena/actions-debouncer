function Debouncer(action, options) {
  options = options || {}
  this.action = action
  this.timeout = options.timeout || 300
  this.currentAction = null
}

Debouncer.prototype.reset = function () {
  if (this.currentAction) {
    clearTimeout(this.currentAction)
  }
}

Debouncer.prototype.do = function () {
  var _this = this
  var _args = arguments

  this.reset()

  this.currentAction = setTimeout(function() {
    _this.action.apply(_this, _args)
  }, this.timeout)
}

module.exports = Debouncer