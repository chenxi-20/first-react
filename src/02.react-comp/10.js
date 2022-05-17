// 从JSX中抽离事件处理程序
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor() {
    super()
    console.log(this.onIncrement)
    this.state = {
      count: 0
    }

    // 指定实例中onIncrement函数的调用者，为当前constructor下的实例对象
    this.onIncrement = this.onIncrement.bind(this)
  }
  //事件处理程序
  onIncrement() {
    console.log(this)
    this.setState({
      count: this.state.count +2
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button type="button" onClick={this.onIncrement}>+1</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));