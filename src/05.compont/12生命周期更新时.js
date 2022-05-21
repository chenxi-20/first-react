//更新生命周期函数：state更新会触发，或者调用函数forceUpda强制更新，
//父子组件生命周期函数执行顺序。具体参照vue
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
    // this.setState({
    //   count: this.state.count + 1
    // })

    // 不要setState,直接调用钩子函数：演示强制更新
    this.forceUpdate();
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
  // 第一次创建挂载完成的钩子函数
  componentDidMount() {
    console.log("app父组件生命周期钩子函数：componentDidMount")
  }
  // 更新完成钩子函数
  componentDidUpdate() {
    console.log("app组件更新生命周期钩子函数：componentDidUpdate")
  }
}
class Counter extends React.Component{
  constructor(props) {
    super(props)
    console.log("子组件的生命周期钩子函数：child-constructor")
  }
  render() {
    console.warn('子组件的生命周期钩子函数：child-render')
    return (
      <h1>统计的豆豆被打次数：{this.props.count}</h1>
    )
  }
  // 子组件第一次挂载完成
  componentDidMount() {
    console.log('子组件生命周期钩子函数：componentDidMount')
  }
  // 子组件更新完成
  componentDidUpdate() {
    console.log('子组件生命周期钩子函数：componentDidUpdate');
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
