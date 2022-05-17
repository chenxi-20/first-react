//事件对象
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  handleClick(e) {
    // 组件浏览器默认行为,阻止a标签跳转；
    e.preventDefault();
    console.log("a标签点击了跳转",e)
  }
  render() {
    return (
      <a href="http://itcast.cn/" onClick={this.handleClick}>传智播客</a>
    )
  }
}
// web端渲染网页
ReactDOM.render(<App />, document.getElementById('root'))