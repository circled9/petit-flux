const EventEmitter = require('eventemitter2').EventEmitter2

class Dispatcher {
  constructor() {
    this._emitter = new EventEmitter()
  }

  register(reducer) {
    this._reducer = reducer
  }

  dispatch(action) {
    this._emitter.emit('dispatch', action)
  }

  connect(view, state) {
    view.setState(state)
    this._emitter.on('dispatch', action => {
      const next = this._reducer(state, action)
      view.setState(next)
    })
  }
}

module.exports = Dispatcher
