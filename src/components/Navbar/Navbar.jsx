import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styles from './Navbar.module.css'
import {
    useHistory, withRouter
  } from "react-router-dom";

class Navbarcomponent extends React.Component {

    
    chartPage = () => {
        this.props.history.push({
            pathname: `/chartpage`,
        });
    }

    render(){
        return(
            <div className={styles.header}>
                <Navbar bg="light" variant="light">
                    <FormControl type="text" placeholder="Search" className="col-2 mr-4" />
                    <Button variant="outline-primary">Search</Button>
                <Nav className="mr-auto ml-4">
                    
                </Nav>
                <Form inline>
                    
                    <Button onClick={() =>this.chartPage()} variant="primary">Chart</Button>
                </Form>
                </Navbar>
            </div>
        )
    }
}

export default withRouter(Navbarcomponent);