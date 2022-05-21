// 高阶组件设置displayName
// 使用高阶组件存在的问题：得到的两个组件名称相同
// 为 高阶组件 设置 displayName 便于调试时区分不同的组件
import React from 'react'
import ReactDOM from 'react-dom'
import img from './05.compont/17/cat.png'

function withMouse(InnerComp) {
  class Mouse extends React.Component{
    state = {
      x: 0,
      y: 0
    }
    handleMouse = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouse)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouse)
    }
    render() {
      return <InnerComp {...this.state} />
    }
  }
  // 设置displayName
  Mouse.displayName = `withMouse${getDisplayName(InnerComp)}`;
  return Mouse;
}
function getDisplayName(comp) {
  return comp.displayName || comp.name || 'Component';
}
const Position = props => (<p>鼠标当前位置：x:{props.x},y:{props.y}</p>)
const Cat = props => (
  <img
    src={img}
    alt="cat"
    style={{
      position: 'absolute',
      left: props.x-64,
      top: props.y-64
    }} 
  />
)
//获取增强后的组件
const EnhancePosition = withMouse(Position);
const EnhanceCat = withMouse(Cat);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件：增加displayName防止组件重名</h1>
        <EnhancePosition/>
        <EnhanceCat />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))