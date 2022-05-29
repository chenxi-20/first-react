// 模糊匹配模式
import React from 'react'
import ReactDOM from 'react-dom'
// 引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Home = () => <p>进入页面的时候，你能看到我吗？</p>
const Login = () => <h1>我是登录页面</h1>

const App = () => (
  <Router>
    <div>
      {/* 模糊匹配login */}
      <Link to="/login/a/c" >能跳到登录页面吗</Link>
      <h1>默认路由</h1>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
)

ReactDOM.render(<App  />, document.getElementById('root'));