import React from 'react';
import styles from './Informationpage.module.css';
import {
    useHistory, withRouter
  } from "react-router-dom";
import baju1 from '../../img/Productlist/baju1.jpg'
import { Form, Button, Col, Card, Table } from 'react-bootstrap';

class Informationpage extends React.Component {

    toShipingpage = () => {
        this.props.history.push({
            pathname: `/shipingpage`,
        });
    }

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
                                <Button as={Col} variant="outline-primary" size="lg" className="mr-5">
                                    Return to cart
                                </Button>
                                <Button as={Col} variant="primary" size="lg" type="submit" onClick={() =>this.toShipingpage()}>
                                    Continue Shiping
                                </Button>
                            </Form.Row>
                           
                        </Form>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>
                        <div>
                        <Table borderless hover>
                            {/* <thead>
                                <tr>
                                <th className={styles.product}></th>
                                <th className={styles.price}></th>
                                </tr>
                            </thead>
                            <hr/> */}
                            <tbody>
                                <tr>
                                <td>
                                    <div className={styles.ketgambar}> 
                                        <div>
                                        <Card style={{cursor : "pointer", width: "80px", marginRight : "20px"}}>
                                            <Card.Img variant="top" src={baju1} />
                                        </Card>
                                        </div> 
                                        <div>
                                            <p style={{fontSize : "18px", margin : "0"}}>Baju Oren</p>
                                            <p style={{fontSize : "14px", margin : "0"}}>Small / Olive</p>
                                            <p style={{fontSize : "14px", marginTop : "20px"}}>Remove</p>
                                        </div>
                                    
                                    </div> 
                                </td>
                                <td>250,000</td>
                                </tr>
                                <tr>
                                <td>
                                    <div className={styles.ketgambar}> 
                                        <div>
                                        <Card style={{cursor : "pointer", width: "80px", marginRight : "20px"}}>
                                            <Card.Img variant="top" src={baju1} />
                                        </Card>
                                        </div> 
                                        <div>
                                            <p style={{fontSize : "18px", margin : "0"}}>Baju Oren</p>
                                            <p style={{fontSize : "14px", margin : "0"}}>Small / Olive</p>
                                            <p style={{fontSize : "14px", marginTop : "20px"}}>Remove</p>
                                        </div>
                                    
                                    </div> 
                                </td>
                                <td>250,000</td>
                                </tr>
                                <tr>
                                <td>
                                    <div className={styles.ketgambar}> 
                                        <div>
                                        <Card style={{cursor : "pointer", width: "80px", marginRight : "20px"}}>
                                            <Card.Img variant="top" src={baju1} />
                                        </Card>
                                        </div> 
                                        <div>
                                            <p style={{fontSize : "18px", margin : "0"}}>Baju Oren</p>
                                            <p style={{fontSize : "14px", margin : "0"}}>Small / Olive</p>
                                            <p style={{fontSize : "14px", marginTop : "20px"}}>Remove</p>
                                        </div>
                                    
                                    </div> 
                                </td>
                                <td>250,000</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.subtotal}>
                        <div>
                            <h6>Subtotal</h6>
                            <h6>Shipping</h6>
                        </div>
                        <div>
                            <h6>450,000</h6>
                            <h6>15,000</h6>
                            
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.subtotal}>
                        <h5>Totals</h5>
                        <h5>465,000</h5>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Informationpage);