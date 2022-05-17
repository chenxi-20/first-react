import React from 'react'
import ReactDOM from 'react-dom'
import './03.form-operate/17/index.css'

//列表渲染
const comments = [
  {name: 'jack', content: '杰克观众席！！！'},
  {name: 'lusi', content: '路西板凳！！！'},
  {name: '乔丹', content: '乔丹演出！！！'},
];
// 条件渲染
const isShowContent = () => {
  return comments.length <= 0 && (<div className="no-comment" >暂无评论，快去评论吧~</div>)
}
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <input className="comment-one" type='text' placeholder="请输入评论人"/>
          <br/>
          <textarea className="comment-content" rows="10" placeholder="请输入评论内容" required="required"></textarea>
          <br/>
          <button className="comment-send" type="button">发表评论</button>
          <br/>
        </div>
        {/* 此处要使用条件渲染 原来写法：*/}
        {/* <div className="no-comment" >暂无评论，快去评论吧~</div> */}
        {/* 条件渲染写法： */}
        {isShowContent()}
        <ul>
          {comments.map(item => {
            return (
              <li>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))