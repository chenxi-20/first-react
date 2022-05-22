//纯组件的基本使用,当子组件是纯组件创建的时：自动判断是否需要更新
import React from 'react'
import ReactDOM from 'react-dom'

const obj={number: 0}
const newObj = obj;
newObj.number = 2;
console.log(newObj === obj)//true
class App extends React.PureComponent{
  state = {
    obj: {
      number: 0
    }
  }
  //生成随机数
  handleClick = () => {
    // // 错误的做法：因为纯组件只是浅比较，只比较引用地址是否一样,所以以下永远不会更新
    // const newObj = this.state.obj
    // newObj.number = Math.floor(Math.random() * 3)
    // this.setState(() => {
    //   return {
    //     obj: newObj
    //   }
    // })
    // 正确修改引用类型数据：创建新对象,那么它就会一直更新；
    const newObj = {...this.state.obj, number: Math.floor(Math.random() * 3)}
    this.setState(() => {
      return {
        obj: newObj
      }
    })
  }
  render() {
    console.log('组件更新了')
    return (
      <div>
        <h1>随机数：{this.state.obj.number}</h1>
        <button onClick={this.handleClick}>重新生成</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))