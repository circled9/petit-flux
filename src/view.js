class View {
  constructor() {
    let _props
    Object.defineProperty(this, 'props', {
      get: function() {
        return _props
      },
      set: function(v) {
        _props = v
        this.render()
      },
      enumerable: true,
      configurable: true
    })

    let _state
    Object.defineProperty(this, 'state', {
      get: function() {
        return _state
      },
      set: function(v) {
        _state = v
        this.render()
      },
      enumerable: true,
      configurable: true
    })
  }

  setState(state) {
    this.state = state
  }

  render() {
    console.log('implement me !')
  }
}

module.exports = View
