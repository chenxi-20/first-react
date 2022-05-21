// render props模式代码优化：移除事件，引入props规则
// 添加事件监听和移除事件
// 1. 推荐：给 render props 模式添加 props校验
// 2. 应该在组件卸载时解除 mousemove 事件绑定
import React from 'react'
import ReactDOM from 'react-dom'

// 导入图片资源
import img from './05.compont/17/cat.png'
// props验证
import PropTypes from 'prop-types'

// 子组件
class Mouse extends React.Component{
  state = {
    x: 0,
    y: 0,
  }
  // 鼠标移动处理程序
  onHandleMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount() {
    console.log('组件挂载完成时')
    window.addEventListener('mousemove', this.onHandleMove)
  }
  componentWillUnmount() {
    console.warn('组件即将销毁')
    window.removeEventListener('mousemove', this.onHandleMove)
  }
  render() {
    return this.props.children(this.state)
  }
}
// 添加props校验
Mouse.propTypes = {
  children: PropTypes.func.isRequired
}
// 父组件
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>render props模式</h1>
        <Mouse>
          {pos => <p>鼠标位置：{pos.x} {pos.y}</p> }
        </Mouse>
        <Mouse>
          {pos => {return (<img alt="猫" src={img} style={{posiction: 'absolute',top: pos.y-64, left: pos.x-64}}/>)}}
        </Mouse>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))