const Debouncer = require('actions-debouncer')

const debouncer = new Debouncer( function(value) {
  console.log(value)
} )

debouncer.do(1)

setTimeout(function() {
  debouncer.do(2)
}, 100)

setTimeout(function() {
  debouncer.do(3)
}, 300)