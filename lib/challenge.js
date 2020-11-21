'use strict'

const SubwayGate = function () {
  Object.defineProperty(this, '_state', {
    value: 'closed',
    configurable: true
  })

  Object.defineProperty(SubwayGate.prototype, 'state', {
    enumerable: true,
    value: function () {
      return this._state
    }
  })
}

SubwayGate.prototype.exit = function () {
  Object.defineProperty(this, '_state', {
    value: 'open'
  })
}

SubwayGate.prototype.walkThrough = function () {
  if (this.state() === 'open') {
    Object.defineProperty(this, '_state', {
      value: 'closed'
    })
    return true
  }
  return false
}

SubwayGate.prototype.tapCard = function (charlieCard) {
  if (charlieCard.monthlyValue) {
    Object.defineProperty(this, '_state', {
      value: 'open'
    })
    return true
  }
  return false
}

SubwayGate.prototype.insertTicket = function (charlieTicket) {
  if (this.state() === 'closed') {
    if (charlieTicket.value >= 2.25) {
      Object.defineProperty(this, '_state', {
        value: 'open'
      })
      charlieTicket.value -= 2.25
      return true
    }
    return false
  }
}

module.exports = {
  SubwayGate
}
