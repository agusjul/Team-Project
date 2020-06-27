import React from 'react';
import styles from './Detailproduct.module.css'
import { Form, Button, CardColumns,Card } from 'react-bootstrap';
import {
    useHistory, withRouter
  } from "react-router-dom";
import Carouselproduct from '../Carouselproduct/Carouselproduct';
import Footer from '../footer/Footer';

class Detailproduct extends React.Component {
    constructor(props){
        super(props)

    this.state = {
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
        ],
        imageProducts : [
            {
                id : 1,
                image : require('../../img/Productlist/baju1.jpg')
            },
            {
                id : 2,
                image : require('../../img/Productlist/baju2.jpg')
            },
            {
                id : 3,
                image : require('../../img/Productlist/baju3.jpg')
            },
            {
                id : 4,
                image : require('../../img/Productlist/baju1.jpg')
            },
            {
                id : 5,
                image : require('../../img/Productlist/baju2.jpg')
            }
            
        ],
    }}

    componentDidMount() {
        const {id} = this.props.match.params
        console.log(id);
        window.scrollTo(0, 0)
      }
    
    


    render(){
        const {id} = this.props.match.params
        return(
            <div>
                <div className={styles.container}>
                    <div className={styles.gambar}>
                        <img src={this.state.dataProducts[id-1].image} alt=""/>
                    </div>
                    <div className={styles.rincian}>
                        <div className={styles.keterangan}>
                            <h2>{this.state.dataProducts[id-1].namaProduct}</h2>
                            <h5> {this.state.dataProducts[id-1].harga}</h5>
                        </div>
                        <div className={styles.keterangan2}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1" className="col-6 pl-0">
                                    <Form.Label>Color :</Form.Label>
                                    <Form.Control as="select">
                                    <option>Olive</option>
                                    <option>Red</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlSelect1" className="col-6 pl-0">
                                    <Form.Label>Zise :</Form.Label>
                                    <Form.Control as="select">
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="mb-2 mt-4">
                            <Button variant="secondary" size="lg" className="mt-2 col-6">
                                Buy Now
                            </Button><br/>
                            <Button variant="outline-secondary" size="lg" className= "mt-2 col-6">
                                Add to Chart
                            </Button>
                        </div>                   
                    </div>
                </div>
                <div>
                    <div className={styles.gambargambar}>
                        <CardColumns>
                            {this.state.imageProducts.map((imageProduct) => (
                                <Card style={{cursor : "pointer",}}>
                                    <Card.Img variant="top" src={imageProduct.image} />
                                </Card>                         
                                
                            ))}
                        </CardColumns>
                    </div>
                    <div className={styles.kalimat}>
                        <p>
                        This is a demonstration store. You can purchase products like this from Sergeant Pepper Clothing Co..
                        Featuring the STEALTH zip up 2-in-1 quilted bomber jacket. This camo printed jacket portrays a traditional bomber silhouette and is constructed from high quality woven nylon. This style features detachable sleeves which lends itself to be worn as a sleeveless or full sleeved bomber. The finer details include a left chest chevron shield, SERGEANT PEPPER embroidered right sleeve applique and branded tag on the left sleeve pocket. An exceptional transitional item to have!
                        </p>
                    </div>
                    <div className={styles.kalimat}>
                        <h5>You Also May Like This</h5>
                        <hr/>
                        <Carouselproduct/>

                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Detailproduct);