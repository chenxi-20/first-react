import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'

// JSX样式处理,style写法不一样，应该加个{}
const list = (
  <h1 className="title-class" style={{color: 'red', backgroundColor: 'green'}}>
    JSX的样式处理
  </h1>
)
ReactDOM.render(list, document.getElementById('root'));