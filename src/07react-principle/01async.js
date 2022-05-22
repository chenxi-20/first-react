// react原理、异步更新数据
import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    count: 1
  }
  handleClick = () => {
    // setState是异步更新,所以写两个是一样的逻辑。还是没变
    this.setState({
      count: this.state.count + 1
    })
    console.log('count:',this.state.count)//1
    // setState是异步更新
    this.setState({
      count: this.state.count + 1
    })
    console.log('count:',this.state.count)//1
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