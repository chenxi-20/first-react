//路由常用的组件
import React from 'react'
import ReactDOM from 'react-dom'

// 导入第二种路由组件BrowserRouter
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

const First = () => (<p>第一个页面的内容</p>)

const App = () => (
  // 只能使用一次router组件包裹整个应用
  <Router>
    <div>
      <h1>React路由基础</h1>
      <div>
        {/* 指定路由出口 */}
        <Route path="/first" component={First} />
      </div>
      {/* 指定路由入口 */}
      <Link to="/first">跳到页面一</Link>
    </div>
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('root'));