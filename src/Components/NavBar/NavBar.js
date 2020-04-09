import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => (
  <>
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">beerMe</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/about">About Page</Nav.Link>
      
    </Nav>
  </Navbar>
  </>
);

export default NavBar;