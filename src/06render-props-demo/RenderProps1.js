import Mouse from './Mouse'

const Position = () => (
  <Mouse>
    {/* 因为children的参数传过来是一个对象，不能写成(x,y);应该用对象解构写法 */}
    {/* <p>因为children的参数传过来是一个对象，不能写成(x,y);应该用对象解构写法 </p> */}
    {({x,y}) => (<p>鼠标的位置：x：{x}，y：{y}</p>)}
  </Mouse>
)
export default Position;