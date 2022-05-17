// 受控组件示例
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    text: '',
    textarea: '',
    city: 'sh',
    isChecked: false
  }
  onTextChange = e => {
    this.setState({
      text: e.target.value
    })
    console.log(this.state.text)
  }
  onTextAreaChange = e => {
    this.setState({
      textarea: e.target.value
    })
    console.log(this.state.textarea)
  }
  onSelectChange = e => {
    this.setState({
      city: e.target.value
    })
    console.log(this.state.city);
  }
  onCheckChange = e => {
    this.setState({
      isChecked: e.target.checked
    })
    console.log(this.state.isChecked)
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input type="text" value={this.state.text} onChange={this.onTextChange} />
        <br />
        {/* 富文本框 */}
        <textarea value={this.state.textarea} onChange={this.onTextAreaChange}></textarea>
        <br />
        {/* 下拉框 */}
        <select value={this.state.city} onChange={this.onSelectChange} required="required">
          <option value="bz">北京</option>
          <option value="sh">上海</option>
          <option value="gz">广州</option>
        </select>
        <br />
        {/* 复选框 */}
        <input type="checkbox" checked={this.state.isChecked} onChange={this.onCheckChange}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))