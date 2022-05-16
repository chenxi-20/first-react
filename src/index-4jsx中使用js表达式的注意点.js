import React from 'react'
import ReactDOM from 'react-dom'

const sayHi = () => 'Hi~'
const dv = <div>我是一个div</div>

const title = (
  <h1>
    hello jsx
    <p>{sayHi()}</p>
    <p>{2<3 ? '2小于3':'2大于3'}</p>
    <p>{2*9}</p>
    <p>{'字符串a'}</p>
    <p>{1}</p>
    {dv}

    {/* 错误演示 */}
    {/* {<p>{{a: '6'}}</p>} */}
  </h1>
)

ReactDOM.render(title, document.getElementById('root'));