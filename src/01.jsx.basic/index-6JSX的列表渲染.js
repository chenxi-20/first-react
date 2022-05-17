import React from 'react'
import ReactDOM from 'react-dom'

const songs = [
  {id: 1, name: '痴心绝对'},
  {id: 2, name: '女儿情'},
  {id: 3, name: '凤凰于飞'}
]
const title = (
  <ul>
    {songs.map(item => <li key={item.id}>{item.id}, {item.name}</li>)}
  </ul>
)

ReactDOM.render(title, document.getElementById('root'));