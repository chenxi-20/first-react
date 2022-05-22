// JSX语法转化过程
import React from 'react'
import ReactDOM from 'react-dom'

// jsx语法
// const element = <h1 className="greeting">Hello JSX！</h1>
// 动态创建react元素语法
const element = React.createElement(
  'h1',
  {
    className: 'greeting'
  },
  'Hello  jsx '
)
console.log(element)

ReactDOM.render(element, document.getElementById('root'))