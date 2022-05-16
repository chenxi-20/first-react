// 函数式声明组件：无状态组件，只负责数据展示，没有state
const btnName = '按钮';

function HelloFunc() {
  // 事件处理函数
  function handleClick(e) {
    // 阻止事件冒泡
    e.preventDefault();
    console.log('点击了函数式组件',e)
  }
  // 小驼峰命名法
  return <button onClick={handleClick} type="button" >Hello {btnName}</button>
}
export default HelloFunc;