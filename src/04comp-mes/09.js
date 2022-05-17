// props校验
import React from 'react'
import ReactDOM from 'react-dom'

// 导入props验证规则库
import PropTypes from 'prop-types';
const App = props => {
  const arr = props.colors
  //列表渲染
  const list = arr.map((item,index) => <li key={index}>{item}</li>)

  return <ul>{list}</ul>
}
//加入验证规则：
App.propTypes = {
  colors: PropTypes.array
}
// 没有验证prop的时候，会报arr.map不是一个function
// ReactDOM.render(<App colors={19}/>, document.getElementById('root'))

ReactDOM.render(<App colors={[1,2,3]}/>, document.getElementById('root'))