import React from 'react';
import styles from './Detailproduct.module.css'
import { Form, Button, CardColumns,Card } from 'react-bootstrap';
import {
    useHistory, withRouter
  } from "react-router-dom";
import Carouselproduct from '../Carouselproduct/Carouselproduct';
import Footer from '../footer/Footer';
import axios from 'axios';

class Detailproduct extends React.Component {
    constructor(props){
        super(props)

    this.state = {
        Products : [],
        src : require('../../img/Productlist/baju2.jpg'),
        cart : {}
    }}

    async componentDidMount() {
        const {id} = this.props.match.params
        console.log(id);
        await axios.get(`http://localhost:8000/produk/${id}`)
        .then(res => {
          
          const productdata = res.data;
          this.setState({
              Products : productdata})
            this.setState({
                src : this.state.Products.gambarProduk
            })
        })
        window.scrollTo(0, 0)
      }
    
    changeImage(url){
        this.setState({
            src : url
        })
    }
    
    addToChart(id){
        const oldCart = this.state.cart;
        this.setState({
            cart : {id}
        })
        console.log(this.state.cart);
    }


    render(){
        const {id} = this.props.match.params
        return(
            <div>
                <div className={styles.container}>
                    <div className={styles.gambar}>
                        <img src={this.state.src} alt=""/>
                    </div>
                    <div className={styles.rincian}>
                        <div className={styles.keterangan}>
                            <h2>{this.state.Products.namaProduk}</h2>
                            <h5> {this.state.Products.hargaProduk}</h5>
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
                            <Button onClick={() =>this.addToChart(this.state.dataProducts[id-1].id)} variant="outline-secondary" size="lg" className= "mt-2 col-6">
                                Add to Chart
                            </Button>
                        </div>                   
                    </div>
                </div>
                <div>
                    <div className={styles.gambargambar}>
                        <CardColumns>
                            <Card onClick={() =>this.changeImage(this.state.Products.gambarProduk)} style={{cursor : "pointer"}}>
                                <Card.Img variant="top" src={(this.state.Products.gambarProduk)} />
                            </Card> 
                            <Card onClick={() =>this.changeImage(this.state.Products.gambarProduk2)} style={{cursor : "pointer"}}>
                                <Card.Img variant="top" src={(this.state.Products.gambarProduk2)} />
                            </Card> 
                            <Card onClick={() =>this.changeImage(this.state.Products.gambarProduk3)} style={{cursor : "pointer"}}>
                                <Card.Img variant="top" src={(this.state.Products.gambarProduk3)} />
                            </Card> 
                            <Card onClick={() =>this.changeImage(this.state.Products.gambarProduk4)} style={{cursor : "pointer"}}>
                                <Card.Img variant="top" src={(this.state.Products.gambarProduk4)} />
                            </Card> 
                            {/* <Card onClick={() =>this.changeImage(this.state.Products.gambarProduk5)} style={{cursor : "pointer"}}>
                                <Card.Img variant="top" src={(this.state.Products.gambarProduk5)} />
                            </Card>  */}
                        </CardColumns>
                    </div>
                    <div className={styles.kalimat}>
                        <p>
                        {this.state.Products.keteranganProduk}
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