const EventEmitter = require('eventemitter2').EventEmitter2

class Dispatcher {
  constructor() {
    this._emitter = new EventEmitter()
    this._reducers = []
  }

  register(reducer) {
    this._reducers.push(reducer)
  }

  dispatch(action) {
    this._emitter.emit('dispatch', action)
  }

  connect(view, state) {
    this._state = state
    view.setState(this._state)

    this._emitter.on('dispatch', action => {
      this._reducers.forEach(reducer => {
        this._state = reducer(this._state, action)
      })
      view.setState(this._state)
    })
  }
}

module.exports = Dispatcher
