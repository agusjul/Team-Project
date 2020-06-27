import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import { Card, Button, Row, CardDeck } from 'react-bootstrap';
import baju1 from '../../img/Productlist/baju1.jpg'

class Carouselproduct extends React.Component {
  state = {
    items: [
    ]
  }

  render () {
    const { items } = this.state;
    return (
      <Carousel itemsToShow={4}>
          <items>
                <Card>
                    <Card.Img variant="top" src={baju1}/>
                    <Card.Body>
                    <Card.Title>Baju Oren</Card.Title>
                    <Card.Text>
                        IDR 200,000
                    </Card.Text>
                    </Card.Body>
                </Card>
          </items>
          <items>
                <Card>
                    <Card.Img variant="top" src={baju1}/>
                    <Card.Body>
                    <Card.Title>Baju Oren</Card.Title>
                    <Card.Text>
                        IDR 200,000
                    </Card.Text>
                    </Card.Body>
                </Card>
          </items>
          <items>
                <Card>
                    <Card.Img variant="top" src={baju1}/>
                    <Card.Body>
                    <Card.Title>Baju Oren</Card.Title>
                    <Card.Text>
                        IDR 200,000
                    </Card.Text>
                    </Card.Body>
                </Card>
          </items>
          <items>
                <Card>
                    <Card.Img variant="top" src={baju1}/>
                    <Card.Body>
                    <Card.Title>Baju Oren</Card.Title>
                    <Card.Text>
                        IDR 200,000
                    </Card.Text>
                    </Card.Body>
                </Card>
          </items>
          <items>
                <Card>
                    <Card.Img variant="top" src={baju1}/>
                    <Card.Body>
                    <Card.Title>Baju Oren</Card.Title>
                    <Card.Text>
                        IDR 200,000
                    </Card.Text>
                    </Card.Body>
                </Card>
          </items>
          <items>
                <Card>
                    <Card.Img variant="top" src={baju1}/>
                    <Card.Body>
                    <Card.Title>Baju Oren</Card.Title>
                    <Card.Text>
                        IDR 200,000
                    </Card.Text>
                    </Card.Body>
                </Card>
          </items>
      </Carousel>
    )
  }
}

export default Carouselproduct