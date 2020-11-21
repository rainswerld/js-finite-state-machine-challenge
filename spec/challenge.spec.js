'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect

const challenge = require('../lib/challenge')
const gate = new challenge.SubwayGate()

describe('SubwayGate', function () {
  it('is instantiated with an immutable _state property', function () {
    expect(gate).to.have.ownPropertyDescriptor('_state', {
      configurable: true,
      enumerable: false,
      writable: false,
      value: 'closed'
    })
  })

  it('has a state method that returns the value of _state', function () {
    expect(gate.state()).to.equal(gate._state)
  })

  describe('has an exit method that', function () {
    it('transitions _state to open if invoked while _state is closed', function () {
      gate.exit()
      expect(gate._state).to.equal('open')
    })

    it('does not transition _state to closed if invoked while _state is open', function () {
      gate.exit()
      expect(gate._state).to.equal('open')
    })
  })

  describe('has a walkThrough method that', function () {
    it('transitions _state to closed if invoked while _state is open', function () {
      gate.walkThrough()
      expect(gate._state).to.equal('closed')
    })

    it('returns false if invoked while _state is closed, and does not transition _state to open', function () {
      expect(gate.walkThrough()).to.equal(false)
      expect(gate.state()).to.equal('closed')
    })
  })

  describe('has an insertTicket method', function () {
    describe('when invoked with charlieTicket that has sufficient value', function () {
      const charlieTicket = {
        value: 10
      }
      const initialValue = charlieTicket.value

      it('transitions _state to open if invoked while _state is closed', function () {
        gate.insertTicket(charlieTicket)
        expect(gate.state()).to.equal('open')
      })

      it('subtracts 2.25 from charlieTicket\'s value after transitioning _state to open', function () {
        expect(charlieTicket.value).to.equal(initialValue - 2.25)
      })

      it('does not subtract from charlieTicket\'s value if invoked while _state is open', function () {
        gate.insertTicket(charlieTicket)
        expect(charlieTicket.value).to.equal(initialValue - 2.25)
      })

      it('does not transition _state to closed if invoked while _state is open', function () {
        gate.insertTicket(charlieTicket)
        expect(gate.state()).to.equal('open')
      })
    })

    describe('when invoked with charlieTicket that has insufficient value', function () {
      const charlieTicket = {
        value: 2.24
      }
      const initialValue = charlieTicket.value

      it('does not transition _state to open', function () {
        gate.walkThrough()
        expect(gate.insertTicket(charlieTicket)).to.equal(false)
      })

      it('does not subtract from charlieTicket\'s value', function () {
        gate.insertTicket(charlieTicket)
        expect(charlieTicket.value).to.equal(initialValue)
      })
    })
  })

  describe('has a tapCard method', function () {
    describe('when invoked with charlieCard that has a monthlyValue of true', function () {
      const charlieCard = {
        monthlyValue: true
      }

      it('transitions _state to open if invoked while _state is closed', function () {
        gate.tapCard(charlieCard)
        expect(gate.state()).to.equal('open')
      })

      it('does not transition _state to closed if invoked while _state is open', function () {
        gate.tapCard(charlieCard)
        expect(gate.state()).to.equal('open')
      })
    })

    describe('when invoked with charlieCard that has a monthlyValue of false', function () {
      const charlieCard = {
        monthlyValue: false
      }

      it('does not transition _state to open', function () {
        gate.walkThrough()
        expect(gate.tapCard(charlieCard)).to.equal(false)
      })
    })
  })
})
