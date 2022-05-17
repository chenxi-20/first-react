// 在jsx中抽离事件处理程序，第一种解决方案：jsx里面事件监听使用箭头函数返回一个类中自定义的方法 
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
    count: 0
  }
  increment() {
    console.log("事件处理程序中的this:", this)
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        {/* 与8.js的不同点在这里 */}
        <button type="button" onClick={() => this.increment()}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));