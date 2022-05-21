// 子组件将要销毁时componentWillUnmount，清除定时器
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    super(props)
    // 初始化state
    this.state = {
      count: 0
    }
  }
  // 打豆豆事件处理程序
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    const {count} = this.state;
    return (
      <div>
        { count > 5 ? (<h1>豆豆被打晕了</h1>) : (<Counter count={count} />)}
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
}
class Counter extends React.Component{
  componentDidMount() {
    console.log('子组件刚创建挂载完成时')
    this.timerId = setInterval(() => {
      console.log("定时器还在哦")
    }, 1000)
  }
  componentWillUnmount() {
    console.log('子组件被移除，销毁时,清理工作（如清除定时器）')
    clearInterval(this.timerId)
  }
  render() {
    return (
      <h1 id="title">统计的豆豆被打次数：{this.props.count}</h1>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
