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

import './css/index.css'

// JSX样式处理,style写法不一样，应该加个{}
const list = (
  <h1 className="title-class" style={{color: 'red', backgroundColor: 'green'}}>
    JSX的样式处理
  </h1>
)
ReactDOM.render(list, document.getElementById('root'));