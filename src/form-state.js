import React from 'react'
class formComp extends React.Component {
  // 1、第一种双向绑定表单
  // state = {
  //   txt: ''
  // }
  // render() {
  //   return <input value={this.state.txt} type="text" onChange={e => {
  //     this.setState({txt: e.target.value}); 
  //     console.log(this.state.txt)}}/>
  // }
  // 2、多表单元素优化（受控组件）

  // 3、非受控组件，创建一个ref对象
  constructor() {
    super()
    this.txtRef = React.createRef()
  }
  render() {
    return <input type="text" ref={this.txtRef} onChange={() => console.log(this.txtRef.current.value)}/>
  }
}
export default formComp;