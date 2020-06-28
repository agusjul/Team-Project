import React, { Component } from 'react';
import styles from './Chartpage.module.css'
import { Table, Card, Button } from 'react-bootstrap';
import baju1 from '../../img/Productlist/baju1.jpg';
import Footer from '../footer/Footer';
import {
    useHistory, withRouter
  } from "react-router-dom";

class Chartpage extends React.Component {


    toInformationpage = () => {
        this.props.history.push({
            pathname: `/informationpage`,
        });
    }

    render(){
        return(
            <div>
                <div className={styles.container}>
                    <h5>Your Shoping Cart</h5>
                </div>
               
               <div>
               <Table borderless hover>
                    <thead>
                        <tr>
                        <th className={styles.product}>Product</th>
                        <th className={styles.price}>Price</th>
                        <th className={styles.quantity}>Quantity</th>
                        <th className={styles.total}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>
                            <div className={styles.item}> 
                                <div>
                                <Card style={{cursor : "pointer", width: "100px", marginRight : "20px"}}>
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
                        <td>1</td>
                        <td>250,000</td>
                        </tr>
                        <tr>
                        <td>
                            <div className={styles.item}> 
                                <div>
                                <Card style={{cursor : "pointer", width: "100px", marginRight : "20px"}}>
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
                        <td>1</td>
                        <td>250,000</td>
                        </tr>
                        <tr>
                        <td>
                            <div className={styles.item}> 
                                <div>
                                <Card style={{cursor : "pointer", width: "100px", marginRight : "20px"}}>
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
                        <td>1</td>
                        <td>250,000</td>
                        </tr>
                        
                    </tbody>
                </Table>
               </div>
               <div style={{marginRight : "120px"}}>
                   <h5 className="float-right">Subtotals <span className="ml-5">450,000</span> </h5>
               </div>
               <div style={{marginRight : "120px", marginTop : "80px"}} className="right">
                   <div style={{justifyContent : "flex-end", display : "flex", marginBottom : "80px"}}>
                        <Button variant="outline-secondary" size="lg" className="mt-2 col-4 mr-4">
                            Continiue Shoping
                        </Button>
                        <Button variant="secondary" size="lg" className= "mt-2 col-4 " onClick={() =>this.toInformationpage()}>
                            Checkout
                        </Button>
                    </div>
               </div>
               <Footer/>
            </div>
        )
    }
}

export default withRouter(Chartpage);