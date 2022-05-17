// context子孙组件通信
import React from 'react'
import ReactDOM from 'react-dom'
import './04comp-mes/07/index.css'

//调用此方创建两个组件，Provider提供数据，consumer消费数据
const { Provider, Consumer } = React.createContext();

class App extends React.Component{
  render() {
    return (
      <Provider value="我是app数据">
        <div className="app">
            APP组件
            <BigNode />
        </div>
      </Provider>
    )
  }
}
const BigNode = () => {
  return (
    <div className="big-node">
      第二个父组件
      <MidNode />
    </div>
  )
}
const MidNode = () => {
  return (
    <div className="mid-node">
      第三个父组件
      <SmallNode />
    </div>
  )
}

const SmallNode = () => {
  return (
    <div className="small-node">
      最小的子组件
      {/* Consumer组件包裹的只能是一个{}里面+回调函数；不能是html结构 */}
      <Consumer>
        {data => <h1>App组件传过来的数据是：{data}</h1>}
      </Consumer>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))