import React from 'react'
import Post from './Post'

const items = [
  {
    name: 'special Item1',
    price: 50.0,
    discount: 0,
  },
  {
    name: 'special Item2',
    price: 120.0,
    discount: 10,
  },
  {
    name: 'popular Item1',
    price: 80.0,
    discount: 0,
  },
  {
    name: 'popular Item2',
    price: 20.0,
    discount: 20,
  },
  {
    name: 'sale Item1',
    price: 50,
    discount: 0,
  },
  {
    name: 'sale Item2',
    price: 80,
    discount: 10,
  },
]

const List = ({ cart, addToCart }) => {
  return (
    <section className='py-5'>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {items.map((item, index) => (
            <Post item={item} cart={cart} addToCart={addToCart} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default List
