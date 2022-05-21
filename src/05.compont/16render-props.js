//render props模式：要复用的state和操作state的方法封装到一个组件中
// 此模式：就是复用相似的功能，
import React from 'react'
import ReactDOM from 'react-dom'

class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0,
  }
  // 组件创建挂载完成时监听滚动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }
  handleMouseMove = e => {
    // console.log(e);
    // 优化做个节流
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    return this.props.position(this.state)
  }
}

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>render props模式</h1>
        <Mouse position={pos => {
          return <p>鼠标位置：{pos.x},{pos.y}</p>
        }}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))