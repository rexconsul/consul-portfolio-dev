import React from 'react'

import { Container, Row, Col, } from 'react-bootstrap'

import style from './Footer.module.css'

function Footer () {
  return (
    <Container className={style.container} bg='light' lg={12}>
      <Row className={style.row}>
        <Col>Home</Col>
        <Col>Link</Col>
      </Row>
      <Row className={style.row}>
        <Col><p>RexConsul &copy; 2021</p></Col>
      </Row>
    </Container>
  )
}

export default Footer;