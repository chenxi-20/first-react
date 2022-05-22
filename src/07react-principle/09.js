//纯组件的基本使用,当子组件是纯组件来创建时：自动判断是否需要更新
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
    count: 1
  }
  //生成随机数
  handleClick = () => {
    this.setState(state => {
      return {
        count: Math.floor(Math.random() * 3)
      }
    })
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

// 纯组件是大写，大驼峰命名
class NumberBox extends React.PureComponent{
  render() {
    console.log("子组件更新啦")
    return (
      <h1>随机数：{this.props.number}</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))