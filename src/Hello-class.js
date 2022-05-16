// 类声明组件
import React from 'react'
class Hello extends React.Component {
  // 1、绑定点击事件,利用箭头函数，直接是this指向当前组件实例
  handleClick = () => {
    // alert("我点击了hello组件")
    this.setState({
      count: this.state.count+1
    })
  }
  // 2、state的基本使用、
  // constructor() {
  //   super()
  //   // 初始化state
  //   this.state = {
  //     count: 0
  //   }
  // }
  // 简化语法
  state = {
    count: 0,
  }
  // // 3、绑定this，是setState可以修改状态值
  // constructor() {
  //   super()
  //   this.handleClick = this.handleClick.bind(this);//es5中使用将事件处理函数绑定到当前组件实例
  // }
  //类组件必须有render函数
  render() {
    return <div onClick={this.handleClick}> 类组件点击+1:{this.state.count}</div>
  }
}
//导出hello组件
export default Hello;