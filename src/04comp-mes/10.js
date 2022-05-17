// props校验
import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
const App = props => {
  return (
    <div>
      <h1>props校验：</h1>
    </div>
  )
}
// 添加props校验
// 属性a的类型：数值（number）
// 属性fn的类型：函数（func）并且为必填项
// 属性tag的类型：React元素（element)
// 属性filter的类型：对象（{area: '上海', price: 1999}）
App.propType = {
  a: PropTypes.number,
  fn: PropTypes.func.isRequired,
  tag: PropTypes.element,
  filter: {
    area: PropTypes.string,
    price: PropTypes.number
  }
}
ReactDOM.render(<App fn={() => console.log("函数")}/>, document.getElementById('root'))