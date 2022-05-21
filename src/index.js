// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react'
import ReactDOM from 'react-dom'


function withMouse(InnerComp) {
  class Mouse extends React.Component{
    state = {
      x: 0,
      y: 0
    }
    handleMouse = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY
      })
    }
    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouse)
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouse)
    }
    render() {
      // 为了不让组件传过来的props的数据丢失。而不是只用高阶组件的state数据，
      // 需要把props和state做相应的处理
      console.log('Mouse:'+this.props)
      return <InnerComp {...this.state}  {...this.props} />
    }
  }
  // 设置displayName
  Mouse.displayName = `withMouse${getDisplayName(InnerComp)}`;
  return Mouse;
}
function getDisplayName(comp) {
  return comp.displayName || comp.name || 'Component';
}
const Position = props => {
  console.log('Position:',props)
  return <p>鼠标当前位置：x:{props.x},y:{props.y}，a: {props.a}</p>
}
//获取增强后的组件
const EnhancePosition = withMouse(Position);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件：增加displayName防止组件重名</h1>
        <EnhancePosition a="12345"/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
