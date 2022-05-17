// react事件绑定
import React from 'react'
import ReactDOM from 'react-dom'

// react事件处理
// // 类组件处理
// class App extends React.Component{
//   // 事件处理程序
//   handleClick() {
//     console.log('按钮点击事件')
//   }
//   render() {
//     return (
//       <button type="button" onClick={this.handleClick}>按钮</button>
//     )
//   }
// }

//函数组件处理
function App() {
  function handleClick() {
    console.log('按钮点击事件')
  };
  
  return (
    <button type="button" onClick={handleClick}>按钮</button>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))