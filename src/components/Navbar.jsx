import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#link'>Link</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavBar