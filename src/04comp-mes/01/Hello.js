// import React from 'react'
// import ReactDOM from 'react-dom'

function Hello(prop) {
  function handleClick() {
    console.log("点击", prop)

  }
  return (
    <div>
      <h1>标题</h1>
      <h3>{prop.name || '点击一下按钮改变标题'}</h3>
      <button type="button" onClick={handleClick}>button</button>
    </div>
  )
}

export default Hello;