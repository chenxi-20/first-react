// 类组件：如果写了构造函数，必须在super里面传入props值
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (
      <div>接收到的数据</div>
    )
  }
}

ReactDOM.render(<App 
  name="rose"
  age={19}
  colors={['red', 'green', 'blue']}
  fn={() => console.log('这是一个函数')}
  tag={<p>这是一个p标签</p>}
  />, 
  document.getElementById('root'))