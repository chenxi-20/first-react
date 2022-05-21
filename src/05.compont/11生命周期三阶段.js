// 类组件才有的生命周期三阶段:创建阶段演示
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  // 第一阶段：组件创建时
  constructor(props) {
    super(props)
    // 初始化state状态
    this.state = {
      count: 0
    }
    // 处理this指向问题
    console.log('生命周期钩子函数：constructor')
  }
  render() {
    console.log("生命周期钩子函数：render")
    return (
      <div>
        <h1 id="title">统计豆豆被打次数：</h1>
        <button id="btn">打豆豆</button>
      </div>
    )
  }
  //1、进行dom操作
  // 2、发送ajax请求，获取远程数据
  componentDidMount() {
    // axios.get('http://api....')
    // const title = document.getElementById('title');
    // console.log(title);
    console.log("生命周期钩子函数：componentDidMount")
  }
}
ReactDOM.render(<App  />, document.getElementById('root'));

