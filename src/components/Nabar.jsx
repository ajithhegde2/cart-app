import {
  Badge,
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { BsCartFill } from 'react-icons/bs'

const Nabar = ({ itemsNum, disableCart, setDisableCart }) => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid className='container px-4 px-lg-5'>
        <Navbar.Brand href='#'>Bootstrap Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0 ms-lg-4'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>About</Nav.Link>
            <NavDropdown title='Shop' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action4'>Popular Items</NavDropdown.Item>
              <NavDropdown.Item href='#action5'>New Arrivals</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            variant={disableCart ? 'outline-success' : 'outline-danger'}
            className='mx-3'
            onClick={() => setDisableCart(!disableCart)}
          >
            {disableCart ? 'Enable Cart' : 'Disable Cart'}
          </Button>
          <Button variant='outline-dark' disabled={disableCart}>
            <BsCartFill />
            <span className='mx-2'>Cart</span>
            <Badge pill bg='dark'>
              {itemsNum}
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nabar
