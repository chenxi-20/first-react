// props的深入用法：children属性
import React from 'react'
import ReactDOM from 'react-dom'

// //children为函数节点时
// const App = props => {
//   console.log(props);
//   props.children()//直接执行
//   return (
//     <div>
//       <h1>组件标签的子节点</h1>
//       {/* 如果children是一个jsx节点，则用以下 */}
//       {/* {props.children} */}
//     </div>
//   )
// }
// ReactDOM.render(<App>{() => console.log("这是一个函数子节点")}</App>, document.getElementById('root'));

// children为jsx、组件、文本节点时
const Test = () => <button>我是button组件</button>
const App = props => {
  console.log(props.children)
  return (
    <div>
      <h1>以下是组件标签的子节点：</h1>
      {/* 可以理解为此处是插槽插入的位置 */}
      {props.children}
    </div>
  )
}
ReactDOM.render(
  <App>
    我是文本节点
    <p>我是子节点，是一个p标签</p>
    <Test></Test>
  </App>, document.getElementById('root'));