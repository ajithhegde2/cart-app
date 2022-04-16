import Nabar from './components/Nabar'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [disableCart, setDisableCart] = useState(false)

  return (
    <div>
      <Nabar
        itemsNum={cart.length}
        disableCart={disableCart}
        setDisableCart={setDisableCart}
      />
      <Header />
      <List cart={cart} addToCart={setCart} disableCart={disableCart} />
    </div>
  )
}

export default App
