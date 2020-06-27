import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {
    render(){
        return (   
            <div className={styles.navigasi}>   
                  
                <Nav defaultActiveKey="/home" className="flex-column w-100">
                    <h4 className="ml-3">HEAVY MERCH</h4>  
                    <hr/>
                    <Nav.Link className="text-dark" href="/home">Home</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-1">Accessories</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-2">Denim</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-3">Footwear</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-3">Jeans</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-3">Outwear</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-3">Pants</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-3">Shirts</Nav.Link>
                    <Nav.Link className="text-dark" eventKey="link-3">T-Shirts</Nav.Link>
                </Nav>
            </div>  
        )
    }
}

export default Sidebar