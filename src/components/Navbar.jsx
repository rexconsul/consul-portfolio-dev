import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
<<<<<<< HEAD
    <Navbar bg='success' expand='lg'>
      <Navbar.Brand href='#home' className='text-light'>Simple Portfolio</Navbar.Brand>
      <Nav className='ms-auto'>
        <Nav.Link href='#about' className='text-light'>About Me</Nav.Link>
        <Nav.Link href='#contact' className='text-light'>Contact Us</Nav.Link>
=======
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Portfolio-React</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#link'>Link</Nav.Link>
>>>>>>> b63304de0fad5748027ff53f86e0542edc1cabe5
      </Nav>
    </Navbar>
  )
}

export default NavBar
