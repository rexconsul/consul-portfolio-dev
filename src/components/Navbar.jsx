import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg='success' expand='lg'>
      <Navbar.Brand href='#home' className='text-light'>Simple Portfolio</Navbar.Brand>
      <Nav className='ms-auto'>
        <Nav.Link href='#about' className='text-light'>About Me</Nav.Link>
        <Nav.Link href='#contact' className='text-light'>Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar