import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbo from './components/Jumbo'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Jumbo/>
      <Container>
        <Row>
          <Col><Card/></Col>
          <Col><Card/></Col>
          <Col><Card/></Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default App;