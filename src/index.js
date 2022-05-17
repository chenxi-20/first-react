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

import PropTypes from 'prop-types'
const App = props => {
  return (
    <div>
      <h1>props校验：</h1>
    </div>
  )
}
// 添加props校验
// 属性a的类型：数值（number）
// 属性fn的类型：函数（func）并且为必填项
// 属性tag的类型：React元素（element)
// 属性filter的类型：对象（{area: '上海', price: 1999}）
App.propType = {
  a: PropTypes.number,
  fn: PropTypes.func.isRequired,
  tag: PropTypes.element,
  filter: {
    area: PropTypes.string,
    price: PropTypes.number
  }
}
ReactDOM.render(<App fn={() => console.log("函数")}/>, document.getElementById('root'))

