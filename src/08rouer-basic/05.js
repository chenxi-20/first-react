// 默认路由
import React from 'react'
import ReactDOM from 'react-dom'
// 引入路由
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => <p>进入页面的时候，你能看到我吗？</p>

const App = () => (
  <Router>
    <div>
      <h1>默认路由</h1>
      <Route path="/" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(<App  />, document.getElementById('root'));