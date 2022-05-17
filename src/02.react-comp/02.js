import React from 'react'
import ReactDOM from 'react-dom'

// 第二种方法：类创建组件
class Hello extends React.Component{
  render() {
    return (
      <h1>这是我的第一个类创建的组件hello</h1>
    )
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'))