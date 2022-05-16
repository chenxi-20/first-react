import React from 'react'
import ReactDom from 'react-dom'

const title = (
  <h1 className="title">
    Hello JSX
    <span />
  </h1>
)
ReactDom.render(title, document.getElementById('root'))