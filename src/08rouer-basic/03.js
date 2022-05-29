// 路由的执行过程
import React from 'react'
import ReactDOM from 'react-dom'
import {browserRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => (<h2>这是home组件的内容</h2>)
const Page1 = () => (<h4>这是页面一组件的内容</h4>)

const App = () => (
  <Router>
    <h1>路由基础</h1>
    <Link to="/home">跳转到home首页</Link>
    <Link to="/page">跳到页面一</Link>
    <div>
      <Route path="/home" component={Home}/>
      <Route path="/page" component={Page1}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));