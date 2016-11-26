import expect from 'expect.js'
import Debouncer from '../index.js'

describe('debouncer', function () {
  it('should excecute the action after 300ms', function (done) {
    const debouncer = new Debouncer((value) => {
      expect(value).to.be(2)
      done()
    })

    debouncer.do(2)
  })

  it('should excecute the action after 500ms', function (done) {
    const debouncer = new Debouncer((value) => {
      expect(value).to.be(2)
      done()
    })

    debouncer.do(2)
  })

  it('should excecute the action with the second value', function (done) {
    const debouncer = new Debouncer((value) => {
      expect(value).to.be(2)
      done()
    })

    debouncer.do(1)

    setTimeout(() => debouncer.do(2), 200)
  })

  it('should excecute the action with the first value', function (done) {
    let shouldIgnore = false;
    const debouncer = new Debouncer((value) => {
      if (shouldIgnore) return;
      shouldIgnore = true;

      expect(value).to.be(1)
      done()
    })

    debouncer.do(1)

    setTimeout(() => debouncer.do(2), 500)
  })

  it('should excecute the action with the last value', function (done) {
    const debouncer = new Debouncer((value) => {
      expect(value).to.be(5)
      done()
    })

    debouncer.do(1)
    debouncer.do(2)

    setTimeout(() => debouncer.do(3), 100)
    setTimeout(() => debouncer.do(4), 200)
    setTimeout(() => debouncer.do(5), 400)
  })

  it('should call the action twice', function (done) {
    let counter = 0
    const debouncer = new Debouncer((value) => {
      counter++
      expect(value).to.be(counter)
      if (counter == 2) {
        return done()
      }
    }, {timeout: 100})

    debouncer.do(1)
    setTimeout(() => debouncer.do(2), 120)
  })
})