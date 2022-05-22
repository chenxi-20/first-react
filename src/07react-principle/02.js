// setState推荐语法
// 注意：这种语法也是异步更新state的！
import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 1
  }
  handleClick = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })
    // console.log('count:',this.state.count)//1
    // 推荐语法
    this.setState((state, props) => {
      return {
        count: state.count + 1 //1+1
      }
    })
    this.setState((state,props) => {
      console.log("第二次调用：",state)//{count: 2}
      return {
        count: state.count + 1
      }
    })
    console.log('count：', this.state.count) //显示的是第一次调用的值：1
  }
  render() {
    console.log('render')
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'))