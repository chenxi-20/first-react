// 编程式导航
import React from 'react'
import ReactDOM from 'react-dom'
// 引入路由
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Login extends React.Component{
  handleLogin = () => {
    //登录实现路由跳转至首页
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <h1>登录页面：</h1>
        <button onClick={this.handleLogin}>登录</button>
      </div>
    )
  }
}

const Home = props => {
  const handleBack = () => {
    // 路由返回
    props.history.go(-1);
  }
  return (
    <div>
      <h1>首页页面：</h1>
      <button onClick={handleBack}>返回登录页</button>
    </div>
  )
}

const App = props => (
  <Router>
    <div>
      <Link to="/login">去登录</Link>
      <h1>编程式导航</h1>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  </Router>
)

ReactDOM.render(<App  />, document.getElementById('root'));