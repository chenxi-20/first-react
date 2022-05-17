// 兄弟组件通信
import React from 'react'
import ReactDOM from 'react-dom'
import './04comp-mes/03/index.css'

// 父组件
class Counter extends React.Component{
  // 提供共享状态
  state = {
    count: 0
  }
  // 子组件2通过props触发此方法
  onIncrement = () => {
    this.setState({
      count: this.state.count + 2
    })
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <Child1 count={count} />
        <Child2 increment={this.onIncrement}/>
      </div>
    )
  }
}
// 子组件1
const Child1 = props => {
  return (
    <div>子组件一：共享的count的值是{props.count}</div>
  )
}
// 子组件2
const Child2 = props => {
  return (
    <div>
      子组件二：修改子组件一的count值；
      <button onClick={() => props.increment()}>+2</button>
    </div>
    
  )
}
ReactDOM.render(<Counter />, document.getElementById('root'));