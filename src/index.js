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
view.setState({name: 'Foo'})
view.setState({name: 'Bar'})
