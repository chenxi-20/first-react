// 20/21.js:获取评论信息,,并且赋值，渲染，尽量使用解构赋值
import React from 'react'
import ReactDOM from 'react-dom'
import './03.form-operate/17/index.css'

class App extends React.Component {
  //初始化状态
  state = {
    // 列表渲染
    comments:[
      {id: 1, name: 'jack', content: '杰克观众席！！！'},
      {id: 2, name: 'lusi', content: '路西板凳！！！'},
      {id: 3, name: '乔丹', content: '乔丹演出！！！'},
    ],
    userName: '',
    userContent: '',
  }
  // 条件渲染+渲染列表
  isShowContent() {
    const { comments } = this.state;//为了写法便捷，最好先解构出来
    if(comments.length <= 0) return (<div className="no-comment" >暂无评论，快去评论吧~</div>)
    return (
      <ul>
         {comments.map(item => (
              <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
               </li>
            ))
          }
      </ul>
    )
  }
  // 获取评论信息
  handleForm = e => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  //发表评论
  sendComment = () => {
    const {userName, userContent, comments} = this.state;
    if(userName.length > 0 && userContent.length > 0) {
      const item = {id: comments.length, name: userName, content: userContent}
      this.setState({
        //放到最前面去
        comments: [item,...comments],
        userName: '',
        userContent: ''
      })
    }
  }
  render() {
    // 使用解构的方式
    const {userName, userContent} = this.state;
    return (
      <div className="app">
        <div>
          <input name="userName" value={userName} onChange={this.handleForm} className="comment-one" type='text' placeholder="请输入评论人"/>
          <br/>
          <textarea name="userContent" value={userContent} onChange={this.handleForm} className="comment-content" rows="10" placeholder="请输入评论内容"></textarea>
          <br/>
          <button className="comment-send" type="button" onClick={this.sendComment}>发表评论</button>
          <br/>
        </div>
        {/* 此处要使用条件渲染 原来写法：*/}
        {/* <div className="no-comment" >暂无评论，快去评论吧~</div> */}
        {/* 条件渲染写法： */}
        {this.isShowContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))