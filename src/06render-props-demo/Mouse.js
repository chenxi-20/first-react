// 封装一个高阶组件
import { Component } from 'react'

export default class Mouse extends Component {
  state = {
    x: 0,
    y: 0
  }
  handleMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }
  render() {
    const { x, y } = this.state;
    return (
      <div>
        {this.props.children({x,y})}
      </div>
    )
  }
}