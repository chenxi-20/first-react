// 比较更新前后的props是否相同，来决定是否重新渲染组件
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
    console.warn("生命周期钩子函数：render")
    return (
      <div>
        <Counter count={this.state.count} />
        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
}
class Counter extends React.Component{
  render() {
    console.warn('子组件的生命周期钩子函数：child-render')
    return (
      <h1 id="title">统计的豆豆被打次数：{this.props.count}</h1>
    )
  }
  // 子组件更新完成
  componentDidUpdate(prevPorps) {
    console.warn('子组件生命周期钩子函数：componentDidUpdate');
    console.log('更新前的props：',prevPorps, '更新后的props：', this.props)
    // 判断props的count是否有更新：决定是否重新渲染组件
    if(prevPorps.count !== this.props.count) {
      this.setState({})//触发更新
      // 或者发送ajax请求
    }
    // 错误演示
    // this.setState({})
    // 获取更新后的DOM
    const title = document.getElementById('title');
    console.log(title);
  }
}
ReactDOM.render(<App />, document.getElementById('root'))