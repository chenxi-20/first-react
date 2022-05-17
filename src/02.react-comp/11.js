// 第三种获取this类实实例App的方法：从JSX中抽离事件处理程序
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
    count: 0,
  }
  increment = () => {
    console.log('事件处理程序中的this：', this)
    this.setState({
      count: this.state.count + 2
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button type="button" onClick={this.increment}>+1</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));