import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import { useSelector } from 'react-redux';

const NavigationBar = () => {
  const cartProducts = useSelector(state=>state.cart);
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="#" className="brand-logo">Redux Toolkit</Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0 nav-links"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={Link} className="nav-link">Products</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link} className="cart-link">My Bag {cartProducts.length}</Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;
