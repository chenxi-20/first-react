//路由的基本使用
import React from 'react'
import ReactDOM from 'react-dom'
// 安装路由：npm i react-router-dom@5.
// 导入组件
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const First = () => (<p>第一个页面的内容</p>)

const App = () => (
  // 只能使用一次router组件包裹整个应用
  <Router>
    <div>
      <h1>React路由基础</h1>
      {/* 指定路由入口 */}
      <Link to="/first">跳到页面一</Link>
      {/* 指定路由出口 */}
      <Route path="/first" component={First} />
    </div>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('root'));