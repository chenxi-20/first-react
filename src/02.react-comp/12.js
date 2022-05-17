import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  onIncrement = () => {
    console.log(this)
    this.setState({
      count: this.state.count+4
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        
        <button type="button" onClick={this.onIncrement}>+4</button>
        
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))