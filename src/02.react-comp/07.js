// 如何修改state:第一种：在html结构中（即JSX)通过箭头函数：把this指向当前类组件实例
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
    count: 0,
    test: '文本'
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button type="button" onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>+1</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));