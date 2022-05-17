import Hello from './Hello'
import ReactDOM from  'react-dom'

function Index() {
  return (
    <div>
      以下内容是我的一个组件
      <Hello name="我是父组件传的值" id="idName" />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
