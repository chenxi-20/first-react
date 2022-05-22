import { Component } from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router, Route} from 'react-router-dom'
import Demo1 from './06render-props-demo/RenderProps1'
import Demo2 from './06render-props-demo/RenderProps2'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/1" component={Demo1}></Route>
        <Route path="/2" component={Demo2}></Route>
      </Router>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))