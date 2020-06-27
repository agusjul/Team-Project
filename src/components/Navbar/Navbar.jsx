import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import styles from './Navbar.module.css'

class Navbarcomponent extends React.Component {
    render(){
        return(
            <div className={styles.header}>
                <Navbar bg="light" variant="light">
                    <FormControl type="text" placeholder="Search" className="col-2 mr-4" />
                    <Button variant="outline-primary">Search</Button>
                <Nav className="mr-auto ml-4">
                    
                </Nav>
                <Form inline>
                    
                    <Button variant="primary">Chart</Button>
                </Form>
                </Navbar>
            </div>
        )
    }
}

export default Navbarcomponent