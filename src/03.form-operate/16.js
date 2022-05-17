//非受控组件:只获取值，不双向绑定：通过ref即可
import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
  constructor() {
    super()
    ///创建ref?一个组件只能创建一个吗？如果有多个呢？
    this.ref = React.createRef();
  }
  onGetInput = e => {
    console.log('文本框的值为：',this.ref.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.ref} />
        <button onClick={this.onGetInput}>获取文本框的值</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))