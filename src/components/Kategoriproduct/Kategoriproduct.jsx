import React from 'react';
import { Card, Button, Row, CardDeck, CardColumns } from 'react-bootstrap';
import styles from './Kategoriproduct.module.css'
import {
    
  BrowserRouter as Router,useHistory, withRouter
  } from "react-router-dom";
import Carouselproduct from '../Carouselproduct/Carouselproduct';
import axios from 'axios';


class Kategoriproduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Products : []
        }
    }    
    
    async componentWillReceiveProps(nextProps){
        const {kategori} = nextProps.match.params
        console.log(kategori);
        await axios.get(`http://localhost:8000/category/${kategori}`)
          .then(res => {
            
            const productdata = res.data;
            this.setState({
                Products : productdata
            })
          })

    }

    async componentDidMount() {
        const {kategori} = this.props.match.params
        console.log(kategori);
        await axios.get(`http://localhost:8000/category/${kategori}`)
          .then(res => {
            
            const productdata = res.data;
            this.setState({
                Products : productdata
            })
          })
          console.log(this.state.Products);
      }

    Productdetails = (id) => {
        this.props.history.push({
            pathname: `/detailproduct/${id}`,
            state: { detail: id }
        });
    }


    render(){
        
        return (
            <Router>
            <div className={styles.listbaju}>
                

                {/* <CardDeck className="mb-4">
                    <Carouselproduct/>
                </CardDeck> */}
                <CardColumns className="mb-4">
                {this.state.Products.map((Product) => (
                    
                        <Card onClick={() =>this.Productdetails(Product.idProduk)} key={Product.idProduk} style={{cursor : "pointer",}}>
                            <Card.Img variant="top" src={Product.gambarProduk} />
                            <Card.Body>
                            <Card.Title>{Product.namaProduk}</Card.Title>
                            <Card.Text>
                                <p style={{fontSize : "20px"}}>Rp.{Product.hargaProduk}</p>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    
                    
                ))}
                </CardColumns>
            </div>
            </Router>
        )
    }
}

export default withRouter(Kategoriproduct);