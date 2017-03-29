const View = require('./view')
class MyView extends View {
  constructor() {
    super()
    this.state = {
      name: '',
      greeting: '',
    }
  }

  render() {
    console.log(`${this.state.greeting} ${this.state.name}`)
  }
}
const view = new MyView()

const Dispatcher = require('./dispatcher')
const dispatcher = new Dispatcher()

const store = {
  name: 'Foo',
  greeting: 'Hello',
}
dispatcher.connect(view, store)

dispatcher.register((state, action) => {
  if (action.type === 'rename') {
    state.name = action.payload
  }
  return state
})

dispatcher.register((state, action) => {
  if (action.type === 'updateGreeting') {
    state.greeting = action.payload
  }
  return state
})

const actionsCreator = (dispatcher) => {
  return {
    rename: (name) => dispatcher.dispatch({type: 'rename', payload: name}),
    updateGreeting: (greeting) => dispatcher.dispatch({type: 'updateGreeting', payload: greeting})
  }
}
const actions = actionsCreator(dispatcher)

actions.rename('Bar')
actions.updateGreeting('こんにちは')
actions.rename('BaBar')
