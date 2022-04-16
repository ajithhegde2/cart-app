import Nabar from './components/Nabar'
import Header from './components/Header'
import List from './components/List'
import { useState } from 'react'

function App() {
  const [cart, setCart] = useState([])

  return (
    <div>
      <Nabar itemsNum={cart.length} />
      <Header />
      <List cart={cart} addToCart={setCart} />
    </div>
  )
}

export default App
