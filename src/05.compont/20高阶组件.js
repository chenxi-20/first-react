import React from 'react'
import ReactDOM from 'react-dom'
import img from './05.compont/17/cat.png'

// 1、创建高阶组件（把公共的js逻辑抽离出来）
function withMouse(InnerComponent) {
  // 该组件提供复用的状态逻辑
  class Mouse extends React.Component {
    // 鼠标状态
    state = {
      x: 0,
      y: 0
    }
    handleMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMove)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMove)
    }
    render() {
      // 相当于把state里面的对象拆分出来，给传进来的低阶组件添加属性
      // {...this.state}就是低阶组件接收的props
      return <InnerComponent {...this.state}/>
    }
  }
  return Mouse;
}
//用来测试高阶组件
const Position = props => {
  console.log(props)
  return (
    <h1>鼠标位置：{props.x} {props.y}</h1>
  )
}
// 用来测试的猫组件
const Cat = props => (
  <img
    src={img}
    alt="猫"
    style={{
      position: 'absolute',
      left: props.x-64,
      top: props.y-64
    }}
  />
)

// 获取增强后的高阶组件
const EnhancePosition = withMouse(Position);
const EnhanceCat = withMouse(Cat);

class App extends React.Component{
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        {/* 渲染增强后的组件 */}
        <EnhancePosition/>
        <EnhanceCat />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
