import React from 'react';
import { Card, Button, Row, CardDeck, CardColumns } from 'react-bootstrap';
import styles from './Listproduct.module.css'
import {
    useHistory, withRouter
  } from "react-router-dom";
import Carouselproduct from '../Carouselproduct/Carouselproduct';


class Listproduct extends React.Component {
    
    
    state = {
        dataProducts : [
            {
                id : 1,
                namaProduct : 'Baju Orange',
                harga : 'IDR 200,000',
                image : require('../../img/Productlist/baju1.jpg')
            },
            {
                id : 2,
                namaProduct : 'Baju Orange',
                harga : 'IDR 200,000',
                image : require('../../img/Productlist/baju2.jpg')
            },
            {
                id : 3,
                namaProduct : 'Baju Orange',
                harga : 'IDR 200,000',
                image : require('../../img/Productlist/baju3.jpg')
            },
            {
                id : 4,
                namaProduct : 'Baju Orange',
                harga : 'IDR 200,000',
                image : require('../../img/Productlist/baju1.jpg')
            },
            {
                id : 5,
                namaProduct : 'Baju Orange',
                harga : 'IDR 200,000',
                image : require('../../img/Productlist/baju2.jpg')
            },
            {
                id : 6,
                namaProduct : 'Baju Orange',
                harga : 'IDR 200,000',
                image : require('../../img/Productlist/baju3.jpg')
            }
        ]
    }

    Productdetails = (id) => {
        this.props.history.push({
            pathname: `/detailproduct/${id}`,
            state: { detail: id }
        });
    }


    render(){
        console.log(this.state.dataProducts.length)
        return (
            
            <div className={styles.listbaju}>
                <h4>Featured Colection</h4>
                <hr/>
                

                <CardDeck className="mb-4">
                    <Carouselproduct/>
                </CardDeck>
                <CardColumns className="mb-4">
                {this.state.dataProducts.map((dataProduct) => (
                    
                        <Card onClick={() =>this.Productdetails(dataProduct.id)} style={{cursor : "pointer",}}>
                            <Card.Img variant="top" src={dataProduct.image} />
                            <Card.Body>
                            <Card.Title>{dataProduct.namaProduct}</Card.Title>
                            <Card.Text>
                                {dataProduct.harga}
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    
                    
                ))}
                </CardColumns>
            </div>
        )
    }
}

export default withRouter(Listproduct);