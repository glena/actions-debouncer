export default class Debouncer {
  constructor (action, options) {
    options = options || {}
    this.action = action
    this.timeout = options.timeout || 300
    this.currentAction = null
  }

  do(...args) {
    if (this.currentAction) {
      clearTimeout(this.currentAction)
    }
    this.currentAction = setTimeout(() => this.action(...args), this.timeout)
  }
}