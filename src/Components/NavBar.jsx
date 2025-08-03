import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='nav'>
        <Container>
          <Navbar.Brand as={NavLink} to='/'>QuickCart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/cart'>Cart</Nav.Link>
          </Nav>
          {cart.cartItems && cart.cartItems.length > 0 ? <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg><span style={{ fontWeight: "700" }}> Cart<sup style={{ padding: "4px 8px", backgroundColor: "blue", color: "white", fontWeight: "700", borderRadius: "100%" }}>{cart.cartItems.length && cart.cartItems.length}</sup></span>
            </Nav.Link>
          </Nav> : null
          }
        </Container>
      </Navbar>
    </>
  )
}