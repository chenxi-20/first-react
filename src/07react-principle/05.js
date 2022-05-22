// 组件更新机制
import React from 'react'
import ReactDOM from 'react-dom'
import './07react-principle/index.css'

class App extends React.Component{
  state = {
    color: '#369'
  }
  getColor() {
    return Math.floor(Math.random() * 256)
  }
  changeBG = () => {
    this.setState(() => {
      return {
        color: `rgb(${this.getColor()},${this.getColor()},${this.getColor()})`
      }
    })
  }
  render() {
    console.log('根组件')
    return (
      <div className="app" style={{backgroundColor: this.state.color}}>
        <button onClick={this.changeBG}>根组件，切换背景颜色状态</button>
        <Parent1 />
        <Parent2 />
      </div>
    )
  }
}

// 左侧组件父组件
class Parent1 extends React.Component{
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  render() {
    console.log('左侧父组件')
    return (
      <div className="parent">
        <h2>
          左侧-父组件
          <button onClick={this.handleClick}>点我（{this.state.count}）</button>
        </h2>
        <div className="parent-wrapper">
          <Child1/>
          <Child2/>
        </div>
      </div>
    )
  }
}
class Child1 extends React.Component {
  render() {
    console.log('左侧子组件 - 1')
    return <div className="child">子组件1-1</div>
  }
}
class Child2 extends React.Component {
  render() {
    console.log('左侧子组件 -2')
    return <div className="child">子组件1-2</div>
  }
}

//右侧父组件
class Parent2 extends React.Component {
  state = {
    count: 0
  }
  handleClick = () => {
    this.setState(state => {
      return {
        count: state.count + 2
      }
    })
  }
  render() {
    console.log('右侧父组件')
    return (
      <div>
        <h2>
          右侧父组件2
          <button onClick={this.handleClick}>点我({this.state.count})</button>
        </h2>
        <div className="parent-wrapper">
          <Child3 />
          <Child4 />
        </div>
      </div>
    )
  }
}
class Child3 extends React.Component {
  render() {
    console.log('右侧子组件 -1')
    return <div className="child">子组件2-1</div>
  }
}
class Child4 extends React.Component {
  render() {
    console.log('右侧子组件 -2')
    return <div className="child">子组件2-2</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))