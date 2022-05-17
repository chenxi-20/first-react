// 评论列表案例18和19.js
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
    name: '',
    content: '',
    id: 4,
  }
  // 条件渲染+渲染列表
  isShowContent() {
    const { comments } = this.state;//为了写法便捷，最好先解构出来
    if(this.state.comments.length <= 0) return (<div className="no-comment" >暂无评论，快去评论吧~</div>)
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
  //发表评论
  sendComment = () => {
    if(this.state.name.length > 0 && this.state.content.length > 0) {
      const item = {id: this.state.id, name: this.state.name, content: this.state.content}
      this.setState({
        comments: [...this.state.comments, item],
        id: this.state.id + 1
      })
    }
  }
  render() {
    return (
      <div className="app">
        <div>
          <input value={this.state.name} className="comment-one" type='text' placeholder="请输入评论人"/>
          <br/>
          <textarea value={this.state.content} className="comment-content" rows="10" placeholder="请输入评论内容" required="required"></textarea>
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