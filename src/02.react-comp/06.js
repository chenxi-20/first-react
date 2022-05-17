// state的基本使用
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  // //1、复杂写法
  // constructor() {
  //   super();//子类的构造函数必须执行一次super()方法，super()代表父类的构造函数，但返回的是子类App的实例；即内部的this是指向App的实例的；
  //   this.state = {
  //     count: 0
  //   }
  // }

  // 1、推荐：简化语法初始化
  state = {
    count: 0
  }
  render() {
    return (
      <div>state中的count值是{this.state.count}</div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));