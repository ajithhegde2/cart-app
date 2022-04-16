import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Post = ({ item, cart, addToCart }) => {
  return (
    <div className='col mb-5'>
      <Card className='h-100 p-0'>
        <Card.Img
          variant='top'
          src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
        />
        <Card.Body className='p-4 text-center'>
          <Card.Title>{item.name}</Card.Title>
          {item.discount ? (
            <Card.Text>
              <span className='text-muted text-decoration-line-through'>
                {'$' + item.price}
              </span>
              {' $' +
                (item.price - Math.floor((item.discount / 100) * item.price))}
            </Card.Text>
          ) : (
            <Card.Text> {'$' + item.price}</Card.Text>
          )}
        </Card.Body>
        <Card.Footer className='p-4 pt-0 border-top-0 bg-transparent text-center'>
          {cart.find((element) => element.name === item.name) ? (
            <div>
              <Button
                variant='outline-danger'
                onClick={() => {
                  cart.splice(
                    cart.findIndex((element) => element.name === item.name),
                    1
                  )

                  addToCart([...cart])
                }}
              >
                -
              </Button>
              <span className='mx-3'>
                {cart.reduce((previous, element) => {
                  if (element.name === item.name) return previous + 1
                  return previous
                }, 0)}
              </span>
              <Button
                variant='outline-success'
                onClick={() => {
                  cart.push(item)
                  addToCart([...cart])
                }}
              >
                +
              </Button>
            </div>
          ) : (
            <Button
              variant='outline-dark'
              onClick={() => {
                cart.push(item)
                addToCart([...cart])
              }}
            >
              Add To Cart
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Post
