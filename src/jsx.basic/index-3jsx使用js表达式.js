import React from 'react'
import ReactDOM from 'react-dom'

const name = 'Jack'
const age = 19

const title = (
  <h1>hello {name}, 年龄{age}</h1>
)
ReactDOM.render(title, document.getElementById('root'));