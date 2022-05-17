// 在jsx中抽离事件处理程序，无法获取到this指向类实例app
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
        {/* 第一种：jsx里面事件监听使用箭头函数返回一个类中自定义的方法 */}
        {/* <button type="button" onClick={() => this.increment()}>+1</button> */}
        <button type="button" onClick={this.increment}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));