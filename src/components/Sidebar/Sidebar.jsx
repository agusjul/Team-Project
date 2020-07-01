import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './Sidebar.module.css';
import {
  Link, withRouter
} from "react-router-dom";

class Sidebar extends React.Component {
    render(){
        return (   
            <div className={styles.navigasi}>   
                  
                <Nav defaultActiveKey="/" className="flex-column w-100">
                    <h4 className="ml-3">HEAVY MERCH</h4>  
                    <hr/>
                    <Link to="/">
                        Home
                    </Link>
                    <Link  to="/aksesoris">
                        Accessories
                    </Link>
                    <Link to="/denim">
                        Denim
                    </Link>
                    <Link to="/footwear">
                        Footwear
                    </Link>
                    <Link to="/jeans">
                        Jeans
                    </Link>
                    <Link to="/outwear">
                        Outwear
                    </Link>
                    <Link to="/pants">
                        Pants
                    </Link>
                    <Link to="/shirt">
                        Shirt
                    </Link>
                    <Link to="/tshirt">
                        T-Shirt
                    </Link>
                </Nav>
            </div>  
        )
    }
}

export default withRouter(Sidebar);