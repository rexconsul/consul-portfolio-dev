import React from 'react'

import {Card, Button} from 'react-bootstrap'

function CardComponent() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>This is a Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus iste rem officiis dolorum velit? Voluptate rem iusto odit omnis odio nostrum vitae reiciendis nam, modi in numquam molestiae nesciunt perspiciatis!
        </Card.Text>
        <Button variant='success'>Go Somewhere</Button>
      </Card.Body>
    </Card>
  )
}


export default CardComponent