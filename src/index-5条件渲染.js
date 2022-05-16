import React from 'react'
import ReactDOM from 'react-dom'

const isLoading = true;
// 第一种写法if else
// const loadData = () => {
//   if(isLoading) {
//     return <h1>Loading......</h1>
//   }
//   return <h1>数据加载完成</h1>
// }
// //第二种写法：三元表达式
// const loadData = () => {
//   return isLoading ? (<h1>Loading.....</h1>) : (<h1>数据加载完成</h1>)
// }
// 第三种写法：短路运算符
const loadData = () => {
  return isLoading && (<h1>Loading......</h1>)
}
const title = (
  <div>
    我是条件渲染部分
    {loadData()}
  </div>
)
ReactDOM.render(title, document.getElementById('root'))