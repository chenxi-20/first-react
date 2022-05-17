// 对14.js进行优化:抽离成一个方法：
//给表单元素添加name属性，与state的数据对应。即可通过target.name获取到响应state值，进行更改。
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
  onChange = e => {
    // console.log(e)
    // console.log(e.target.name)
    // console.log(e.target.type)
    //获取当前dom对象
    const target = e.target;
    // 根据类型获取值
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // 获取name
    const name = target.name;
    this.setState({
      [name]: value
    })
    console.log(this.state[name])
  }
  render() {
    return (
      <div>
        {/* 文本框 */}
        <input name="text" type="text" value={this.state.text} onChange={this.onChange} />
        <br />
        {/* 富文本框 */}
        <textarea name="textarea" value={this.state.textarea} onChange={this.onChange}></textarea>
        <br />
        {/* 下拉框 */}
        <select name="city" value={this.state.city} onChange={this.onChange} required="required">
          <option value="bz">北京</option>
          <option value="sh">上海</option>
          <option value="gz">广州</option>
        </select>
        <br />
        {/* 复选框 */}
        <input name="isChecked" type="checkbox" checked={this.state.isChecked} onChange={this.onChange}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))