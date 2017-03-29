const View = require('./view')
class MyView extends View {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  render() {
    console.log(`Hello, ${this.state.name}`)
  }
}
const view = new MyView()

const Dispatcher = require('./dispatcher')
const dispatcher = new Dispatcher()

const store = {
  name: 'Foo'
}
dispatcher.connect(view, store)

dispatcher.register((state, action) => {
  if (action.type === 'rename') {
    state.name = action.payload
  }
  return state
})

dispatcher.dispatch({
  type: 'rename',
  payload: "Bar"
})
dispatcher.dispatch({
  type: 'rename',
  payload: "BaBar"
})
