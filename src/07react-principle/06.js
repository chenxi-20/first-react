//组件性能优化：sholdComponentUpdate避免不必要的更新
import React from 'react'
import ReactDOM from 'react-dom'
import './07react-principle/index.css'

class App extends React.Component{
  state = {
    count: 1
  }
  handleClick = () => {
    this.setState(state => {
      return {
        count: state.count + 1
      }
    })
  }
  // 更新前的钩子函数
  shouldComponentUpdate(nextProps, nextState) {
    // console.log("是否应该更新？，不给你更新，返回false,此时的count值有变化：count=",this.state.count)
    // // 返回false，阻止组件重新渲染
    // return false;
    // 最新的状态：
    console.log('更新后',nextState);
    // 更新前的状态：
    console.log('更新前',this.state);
    return true
  }
  render() {
    console.log('组件更新了')
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))