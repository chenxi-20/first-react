//组件通信：简单的父传子
import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'

class Parent extends React.Component{
  state ={
    name: '我是父组件的值'
  }
  render() {
    const {name} = this.state;
    return (
      <div className="parent">
        父组件：
        <Child name={name} />
      </div>
    )
  }
}
function Child(props) {
  console.log(props)
  return (
    <div className="children">
      <h1>我是子组件，接收到的父组件数据是{props}</h1>
    </div>
  )
}

ReactDOM.render(<Parent />, document.getElementById('root'))