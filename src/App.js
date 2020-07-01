import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarcomponent from './components/Navbar/Navbar';
import Slidecomponent from './components/Slideshow/Slideshow';
import Navigasicomponent from './components/Navigasi/Navigasi';
import Listproduct from './components/Listproduct/Listproduct';
import Kategoriproduct from './components/Kategoriproduct/Kategoriproduct';
import Sidebar from './components/Sidebar/Sidebar';
import Detailproduct from './components/Detailproduct/Detailproduct';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Chartpage from './components/Chartpage/Chartpage';
import Informationpage from './components/Informationpage/Informationpage';
import Shipingpage from './components/Shipingpage/Shipingpage';
import Paymentpage from './components/Paymentpage/Paymentpage';
import Footer from './components/footer/Footer';
import styles from './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
        Products : []
    }
}  
  
  async componentDidMount() {
    await axios.get(`http://localhost:8000/produk`)
      .then(res => {
        
        const productdata = res.data;
        this.setState({
            Products : productdata
        })
      })
      console.log(this.state.Products);
  }

  renderNav = (routerProps) => {
    let NavId = (routerProps.match.params.kategori)
    
  }


  render(){
  return (
      <div className="tampilan">
        <Router>
          <Navbarcomponent/>
          
          <Switch>
            <Route exact path="/">
              <Row>
                <Col xl={3}>
                    <Sidebar/>
                </Col>
                <Col xl={9}>              
                    <Slidecomponent/>
                    <Listproduct/> 
                    <Footer/> 
                </Col>
              </Row>
            </Route>
            <Route path="/detailproduct/:id">
            <Row>
                <Col xl={3}>
                    <Sidebar/>
                </Col>
                <Col xl={9}>              
                    <Detailproduct /> 
                </Col>
              </Row>
            </Route>
            <Route path="/informationpage">
              <Informationpage/>
            </Route>
            <Route path="/shipingpage">
              <Shipingpage/>
            </Route>
            <Route path="/paymentpage">
              <Paymentpage/>
            </Route>
            <Route path="/chartpage">
            <Row>
                <Col xl={3}>
                    <Sidebar/>
                </Col>
                <Col xl={9}>              
                    <Chartpage/>
                </Col>
              </Row>
            </Route>
            <Route path="/:kategori">
              <Row>
                <Col xl={3}>
                    <Sidebar/>
                </Col>
                <Col xl={9}>           
                    <Kategoriproduct/> 
                    <Footer/> 
                </Col>
              </Row>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}
}

export default App;
