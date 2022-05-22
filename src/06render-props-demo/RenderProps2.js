import Mouse from './Mouse'
import img from '../05.compont/17/cat.png'

const Cat = () => (
  <Mouse>
    {({x,y}) => (
      <img
        src={img}
        alt="cat"
        style={{
          position: 'absolute',
          left: x-64,
          top: y-64
        }}
      />
    )}
  </Mouse>
)

export default Cat