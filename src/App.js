import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbo from './components/Jumbo'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Jumbo/>
      <AboutMe/>
      <Container>
        <Row>
          <Col><Card/></Col>
          <Col><Card/></Col>
          <Col><Card/></Col>
        </Row>
      </Container>
      <Footer/>
    </React.Fragment>
  )
}

export default App;