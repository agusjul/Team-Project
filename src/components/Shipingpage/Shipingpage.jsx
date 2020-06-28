import React from 'react';
import styles from './Shiping.module.css'
import {
    useHistory, withRouter
  } from "react-router-dom";
import baju1 from '../../img/Productlist/baju1.jpg'
import { Form, Button, Col, Card, Table, ListGroup } from 'react-bootstrap';

class Shipingpage extends React.Component {

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
                        <div>
                            <ListGroup>
                                <ListGroup.Item>
                                    <div className={styles.contact}>
                                        <p className={styles.contacttitle}>Contact</p>
                                        <p className={styles.contactitem}>Ahay@gmail.com</p>
                                        <a href="#" className={styles.contactbutton}>Change</a>
                                    </div>                              
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className={styles.contact}>
                                        <p className={styles.contacttitle}>Ship to</p>
                                        <p className={styles.contactitem}>Jalan Pegangsaan Timur, No.56 Jakarta</p>
                                        <a href="#" className={styles.contactbutton}>Change</a>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                        <div style={{marginTop : "40px"}}>
                            <h5>Shiping Method</h5>
                            <hr/>
                            <div>
                                <ListGroup>
                                    <ListGroup.Item>
                                        <div className={styles.contact}>
                                            <Form.Check type="radio" aria-label="radio 1" className={styles.contacttitle}/>
                                            <div className={styles.contactitem}>
                                                <p style={{margin : "0"}}>JNE</p>
                                                <p style={{fontSize : "12px", margin : "0"}}>4 - 7 Hari Pengiriman</p>
                                            </div>
                                            <p className={styles.contactbutton}>25,000</p>
                                        </div>           
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className={styles.contact}>
                                            <Form.Check type="radio" aria-label="radio 1" className={styles.contacttitle}/>
                                            <div className={styles.contactitem}>
                                                <p style={{margin : "0"}}>J&T Express</p>
                                                <p style={{fontSize : "12px", margin : "0"}}>4 - 7 Hari Pengiriman</p>
                                            </div>
                                            <p className={styles.contactbutton}>35,000</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className={styles.contact}>
                                            <Form.Check type="radio" aria-label="radio 1" className={styles.contacttitle}/>
                                            <div className={styles.contactitem}>
                                                <p style={{margin : "0"}}>SiCepat</p>
                                                <p style={{fontSize : "12px", margin : "0"}}>10 - 12 Hari Pengiriman</p>
                                            </div>
                                            <p className={styles.contactbutton}>25,000</p>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className={styles.contact}>
                                            <Form.Check type="radio" aria-label="radio 1" className={styles.contacttitle}/>
                                            <div className={styles.contactitem}>
                                                <p style={{margin : "0"}}>POS Indoensia</p>
                                                <p style={{fontSize : "12px", margin : "0"}}>4 - 7 Hari Pengiriman</p>
                                            </div>
                                            <p className={styles.contactbutton}>25,000</p>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </div>
                        <div style={{display : "flex", marginTop : "40px"}}>
                            <Button as={Col} variant="outline-primary" size="lg" className="mr-5">
                                Return Information Details
                            </Button>
                            <Button as={Col} variant="primary" size="lg" type="submit" onClick={() =>this.toShipingpage()}>
                                Continue Payment
                            </Button>
                        </div>
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

export default withRouter(Shipingpage);

