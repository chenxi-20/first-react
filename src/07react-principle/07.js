// 随机数案例，根据随机数前后是否相同，来判断是否需要更新
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
    count: 1
  }
  handleClick = () => {
    this.setState(state => {
      return {
        count: Math.floor(Math.random() * 3)
      }
    })
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新后',nextState,'更新前',this.state);
    // 直接简写
    return nextState.count !== this.state.count
  }
  render() {
    console.log('组件更新了')
    return (
      <div>
        <h1>随机数：{this.state.count}</h1>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
