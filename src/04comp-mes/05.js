//组件通信：子传父组件：思路利用回调函数；
import React from 'react'
import ReactDOM from 'react-dom'
import './04comp-mes/03/index.css'

// 父组件
class Parent extends React.Component{
  state ={
    name:''
  }
  //获取子组件传过来的值
  getChildMsg = data => {
    console.log('子组件传参为：'+data)
    this.setState({
      name: data
    })
  }
  render() {
    const {name} = this.state;
    return (
      <div className="parent">
        父组件：{name}
        <Child getMsg={this.getChildMsg}/>
      </div>
    )
  }
}
// 子组件
class Child extends React.Component{
  state = {
    child: '子组件的值1-1'
  }
  // 通过props里面的方法，调用父组件的回调函数
  handleClick = () => {
    const {child} = this.state;
    this.props.getMsg(child)
  }
  render() {
    return (
      <div className="children">
        {/* 子组件 */}
        <button onClick={this.handleClick}>点我给父组件传值</button>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))