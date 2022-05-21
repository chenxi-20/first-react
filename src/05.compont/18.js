// 使用props的children属性实现render-props
import React from 'react'
import ReactDOM from 'react-dom'
import img from './05.compont/17/cat.png'

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
    return this.props.children(this.state)
  }
}

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>render props模式</h1>
        <Mouse>{pos => { return <p>鼠标位置：{pos.x},{pos.y}</p>}}</Mouse>
        <Mouse>{pos => {
          return (
            <img
              src={img}
              alt="猫"
              style={{
                position: 'absolute',
                top: pos.y-64,
                left: pos.x-64
              }}
            />
          )
        }}
        </Mouse>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))