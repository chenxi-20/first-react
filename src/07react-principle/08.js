// 随机数案例，根据父组件传给子组件的props是否发生变化来决定是否更新子组件；
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
        <NumberBox number={this.state.count}/>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}

class NumberBox extends React.Component{
  // 通过判断父组件传过来的props是否为新值，决定是否更新
  shouldComponentUpdate(nextProps) {
    console.log('最新的props:',nextProps,',上一个props',this.props)
    return nextProps.number !== this.props.number
  }
  render() {
    console.log("子组件更新啦")
    return (
      <h1>随机数：{this.props.number}</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
