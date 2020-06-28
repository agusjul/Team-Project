import React from 'react';
import styles from './Informationpage.module.css';
import {
    useHistory, withRouter
  } from "react-router-dom";
  
import { Form, Button, Col } from 'react-bootstrap';

class Informationpage extends React.Component {
    render(){
        return(
            <div className={styles.container}>
                <div className={styles.information}>
                    <h3 style={{marginBottom : "40px"}}>HEAVY MERCH</h3>
                    <div className="border-right pr-5">
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mb-5">
                                <h5>Contact Information</h5>
                                <hr/>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <h5>Shiping Address</h5>
                                <hr/>
                                <Form.Row>
                                    <Col>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Kabupaten</Form.Label>
                                <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Provinsi</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Kode Pos</Form.Label>
                                <Form.Control />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="mt-5">
                                <Button as={Col} variant="outline-primary" className="mr-5">
                                    Return to cart
                                </Button>
                                <Button as={Col} variant="primary" type="submit">
                                    Continue Shiping
                                </Button>
                            </Form.Row>
                           
                        </Form>
                    </div>
                </div>
                <div className={styles.item}>
                    <h1>Belanjaan</h1>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Informationpage);