// 受控组件：其值收到react控制的表单元素，操作文本框的值
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  state = {
    input: ''
  }
  onChangeValue = e => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input 
        placeholder="输入框的内容是双向绑定的"
        type="text" 
        value={this.state.input} 
        onChange={this.onChangeValue} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));