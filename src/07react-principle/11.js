// 虚拟dom和diff算法
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent{
  state = {
    number: 0
  }
  //生成随机数
  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3)
      }
    })
  }
  // render方法调用并不意味着浏览器中的重新渲染！！！
  // render方法调用仅仅说明要进行diff
  render() {
    const el = (
      <div>
        <h1>随机数：{this.state.number}</h1>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
    console.log('组件更新了, ',el)
    return el
  }
}
ReactDOM.render(<App />, document.getElementById('root'))