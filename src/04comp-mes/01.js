// 组件传值props属性
import React from 'react'
import ReactDOM from 'react-dom'

// //第一种：类组件props传值
// class Hello extends React.Component {
//   render() {
//     const {age, name} = this.props;
//     return (
//       <div>
//         <h1>props age值: {age}</h1>
//         <h1>props name值：{name}</h1>
//       </div>
//     )
//   }
// }
//传递数据
// ReactDOM.render(<Hello name="class-Hello" age={19} />, document.getElementById('root'))

// 第二种：函数组件props传值
const Hello = props => {
  const {age, name} = props;
  return (
    <div>
      <h1>props age值: {age}</h1>
      <h1>props name值：{name}</h1>
    </div>
  )
}
// 传递数据
ReactDOM.render(<Hello name="func-Hello" age={22} />, document.getElementById('root'))