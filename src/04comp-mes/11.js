// props默认值的设置
import React from 'react'
import ReactDOM from 'react-dom'

const App = props => {
  return (
    <div>
      此处展示props的默认值：{props.pageSize}
    </div>
  )
}
App.defaultProps = {
  pageSize: 10
}
ReactDOM.render(<App />, document.getElementById('root'))